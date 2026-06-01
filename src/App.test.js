import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /i build web and mobile systems that make business operations easier/i,
    })
  ).toBeInTheDocument();
});

test('labels chat as a portfolio assistant', async () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /open chat with ronnel/i }));

  expect(screen.getByText(/portfolio assistant/i)).toBeInTheDocument();
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
