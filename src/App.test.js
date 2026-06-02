import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /practical web and mobile apps, built end to end/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /see my work/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /start a conversation/i }).length).toBeGreaterThan(0);
});

test('labels chat as a portfolio assistant', async () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /open chat with ronnel/i }));

  expect(screen.getByText(/portfolio assistant/i)).toBeInTheDocument();
});

test('renders refreshed about copy and expanded skills', () => {
  window.history.pushState({}, '', '#about');
  render(<App />);

  expect(
    screen.getByText(/how i turn messy workflows into shipped web and mobile products/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/tools i use across shipped web, mobile, backend, and platform work/i)
  ).toBeInTheDocument();

  const skillsList = screen.getByRole('list', { name: /technical skills/i });
  expect(within(skillsList).getByText(/Next\.js/i)).toBeInTheDocument();
});

test('limits all technical skills and expands with see more', () => {
  window.history.pushState({}, '', '#about');
  render(<App />);

  let skillsList = screen.getByRole('list', { name: /technical skills/i });
  expect(within(skillsList).getAllByRole('listitem')).toHaveLength(12);
  expect(within(skillsList).queryByText(/PostgreSQL/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /see more/i }));

  skillsList = screen.getByRole('list', { name: /technical skills/i });
  expect(within(skillsList).getAllByRole('listitem').length).toBeGreaterThan(12);
  expect(within(skillsList).getByText(/PostgreSQL/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /show less/i }));

  skillsList = screen.getByRole('list', { name: /technical skills/i });
  expect(within(skillsList).getAllByRole('listitem')).toHaveLength(12);
  expect(within(skillsList).queryByText(/PostgreSQL/i)).not.toBeInTheDocument();
});

test('filters refreshed skills by new technical categories', () => {
  window.history.pushState({}, '', '#about');
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /backend/i }));

  let skillsList = screen.getByRole('list', { name: /technical skills/i });
  expect(within(skillsList).getByText(/Express/i)).toBeInTheDocument();
  expect(within(skillsList).getAllByRole('listitem')).toHaveLength(5);
  expect(within(skillsList).queryByText(/PostgreSQL/i)).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /see more/i })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /data\/auth/i }));

  skillsList = screen.getByRole('list', { name: /technical skills/i });
  expect(within(skillsList).getByText(/PostgreSQL/i)).toBeInTheDocument();
});

test('renders suggested chat prompt chips in a horizontal scroll region', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /open chat with ronnel/i }));

  const suggestedQuestions = screen.getByRole('group', { name: /suggested questions/i });
  expect(suggestedQuestions).toHaveClass('overflow-x-auto');
  expect(suggestedQuestions).toHaveClass('flex-nowrap');

  expect(
    within(suggestedQuestions).getByRole('button', {
      name: /what kind of apps do you build/i,
    })
  ).toBeInTheDocument();
  expect(
    within(suggestedQuestions).getByRole('button', {
      name: /which project shows your best work/i,
    })
  ).toBeInTheDocument();
  expect(
    within(suggestedQuestions).getByRole('button', {
      name: /what tech stack do you use/i,
    })
  ).toBeInTheDocument();
  expect(
    within(suggestedQuestions).getByRole('button', {
      name: /how can i contact you/i,
    })
  ).toBeInTheDocument();
});

test('renders services selector links and detail content', () => {
  window.history.pushState({}, '', '#services');
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /What I Can Help Build/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Web Application Development/i })
  ).toHaveAttribute('href', '#services-web-application-development');
  expect(
    screen.getByRole('heading', { name: /Web Application Development/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Challenges It Solves/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Related Builds/i).length).toBeGreaterThan(0);

  window.history.pushState({}, '', '#home');
});

test('renders project proof labels in the portfolio grid', () => {
  render(<App />);

  expect(screen.getAllByText(/live website/i).length).toBeGreaterThan(0);
});

test('filters projects by proof label', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /all projects/i }));
  fireEvent.click(screen.getByRole('button', { name: /healthcare/i }));

  expect(
    screen.getByRole('heading', { name: /Queue Management System/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Caregiver Assistant/i })
  ).toBeInTheDocument();
});

test('combines platform and proof label filters', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /web development/i }));
  fireEvent.click(screen.getByRole('button', { name: /healthcare/i }));

  expect(
    screen.getByRole('heading', { name: /Queue Management System/i })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { name: /Caregiver Assistant/i })
  ).not.toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('shows a private internal project label in the project modal', () => {
  render(<App />);

  const projectHeading = screen.getByRole('heading', {
    name: /Queue Management System/i,
  });
  const projectCard = projectHeading.closest('div');
  const learnMoreButton = within(projectCard).getByRole('button', {
    name: /learn more/i,
  });

  expect(learnMoreButton).toBeInTheDocument();

  fireEvent.click(learnMoreButton);

  expect(screen.getByText(/Private internal system/i)).toBeInTheDocument();
  expect(
    screen.queryByRole('link', { name: /Visit Queue Management System website/i })
  ).not.toBeInTheDocument();
});

test('uses builder-focused labels in the project modal', () => {
  render(<App />);

  const projectHeading = screen.getByRole('heading', {
    name: /Queue Management System/i,
  });
  const projectCard = projectHeading.closest('div');
  const learnMoreButton = within(projectCard).getByRole('button', {
    name: /learn more/i,
  });

  fireEvent.click(learnMoreButton);

  expect(screen.getByText(/Context/i)).toBeInTheDocument();
  expect(screen.getByText(/Challenge/i)).toBeInTheDocument();
  expect(screen.getByText(/What I Built/i)).toBeInTheDocument();
  expect(screen.getByText(/What Changed/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Built Result/i).length).toBeGreaterThan(0);
});

test('opens and controls the fullscreen project image viewer', () => {
  render(<App />);

  const projectHeading = screen.getByRole('heading', {
    name: /Queue Management System/i,
  });
  const projectCard = projectHeading.closest('div');
  const learnMoreButton = within(projectCard).getByRole('button', {
    name: /learn more/i,
  });

  fireEvent.click(learnMoreButton);
  fireEvent.click(screen.getByAltText(/Queue Management System - 1/i));

  const viewer = screen.getByLabelText(/Queue Management System image viewer/i);
  expect(within(viewer).getByText(/1 \/\s*11/i)).toBeInTheDocument();
  expect(within(viewer).getByRole('button', { name: /View image 3 of 11/i })).toBeInTheDocument();

  fireEvent.click(within(viewer).getByRole('button', { name: /Next image/i }));
  expect(within(viewer).getByText(/2 \/\s*11/i)).toBeInTheDocument();

  fireEvent.click(within(viewer).getByRole('button', { name: /Previous image/i }));
  expect(within(viewer).getByText(/1 \/\s*11/i)).toBeInTheDocument();

  fireEvent.click(within(viewer).getByRole('button', { name: /View image 3 of 11/i }));
  expect(within(viewer).getByText(/3 \/\s*11/i)).toBeInTheDocument();

  fireEvent.doubleClick(within(viewer).getByAltText(/Queue Management System - Fullscreen/i));
  expect(within(viewer).getByText(/Zoom level 2.0x/i)).toBeInTheDocument();

  fireEvent.click(within(viewer).getByRole('button', { name: /Exit fullscreen/i }));
  expect(screen.queryByLabelText(/Queue Management System image viewer/i)).not.toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: /Queue Management System/i }).length).toBeGreaterThan(0);
});
