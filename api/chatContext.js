const { PROJECT_DATA } = require('../src/constants/projectData');
const portfolioProfile = require('../src/data/portfolioProfile');

const MAX_PROJECT_RESPONSIBILITIES = 3;

function compactList(items) {
  return items.filter(Boolean).join(', ');
}

function buildProjectLines(projects) {
  return projects.map((project) => {
    const publicLinks = compactList([
      project.link && project.link !== '#' ? project.link : '',
      project.iosLink,
      project.androidLink,
    ]);
    const responsibilities = (project.responsibilities || [])
      .slice(0, MAX_PROJECT_RESPONSIBILITIES)
      .join('; ');

    return [
      `- ${project.project_name}`,
      `  Type: ${project.tag || 'project'}`,
      `  Role: ${project.role || 'Not specified'}`,
      `  Description: ${project.project_description}`,
      `  Technologies: ${compactList(project.technologies || []) || 'Not specified'}`,
      publicLinks ? `  Public link(s): ${publicLinks}` : '',
      responsibilities ? `  Selected responsibilities: ${responsibilities}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  });
}

function buildServiceLines(services) {
  return services.map((service) =>
    [
      `- ${service.title}: ${service.summary}`,
      `  Audience: ${service.audience}`,
      `  Problems solved: ${compactList(service.problems)}`,
      `  Includes: ${compactList(service.features)}`,
      `  Technologies: ${compactList(service.technologies)}`,
      `  Outcomes: ${service.outcomes}`,
      `  Relevant case studies: ${service.caseStudy}`,
    ].join('\n'),
  );
}

function buildFaqLines(faqs) {
  return faqs.map((faq) => `- ${faq.question} ${faq.answer}`);
}

function buildPortfolioContext() {
  const { contact } = portfolioProfile;

  return [
    `${portfolioProfile.name} is a ${portfolioProfile.role}.`,
    portfolioProfile.summary,
    '',
    'About:',
    ...portfolioProfile.about.map((item) => `- ${item}`),
    '',
    'Core skills:',
    `- ${portfolioProfile.skills.map((skill) => skill.name).join(', ')}`,
    '',
    'Services:',
    ...buildServiceLines(portfolioProfile.services),
    '',
    'Development process:',
    ...portfolioProfile.processSteps.map((step, index) => `- ${index + 1}. ${step}`),
    '',
    'Service FAQs:',
    ...buildFaqLines(portfolioProfile.serviceFaqs),
    '',
    'Contact:',
    `- Email: ${contact.email}`,
    ...contact.socialLinks.map((link) => `- ${link.label}: ${link.href}`),
    '',
    'Pricing guidance:',
    `- ${portfolioProfile.pricingGuidance}`,
    '',
    'Portfolio projects:',
    ...buildProjectLines(PROJECT_DATA),
  ].join('\n');
}

module.exports = {
  buildPortfolioContext,
  PROJECT_DATA,
  portfolioProfile,
};
