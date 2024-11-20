---
date: '2023-03-09'
draft: false
title: 'Ensuring user trust and satisfaction through complete testing of an accounting & tax application'
subtitle: 'Design, functionality, and transaction testing for error-free cash flow and invoicing'
image: 'images/case-studies/Coconut.jpg'
alt: 'A woman doing her finances in an app.'
industry: 'Finance'
keywords:
  [
    'Finance',
    'Tax app',
    'User experience',
    'Security ',
    'Stress testing',
    'Java',
    'JUnit',
    'Selenium',
    'Appium',
    'KYC',
    'Automated testing',
  ]
---

In this case study you can read about:

- [About the client](#about-the-client)
- [Client’s challenges](#clients-challenges)
- [Our approach](#our-approach)
  - [To retain users’ trust, calculation errors are unacceptable](#to-retain-users-trust-calculation-errors-are-unacceptable)
  - [Stress testing](#stress-testing)
  - [Security testing](#security-testing)
  - [Backend development](#backend-development)
- [Value delivered](#value-delivered)

## About the client

The client is the provider of a comprehensive and user friendly tax app for self&#8209;employed individuals. The app allows users to track their income, manage invoicing, claim expenses, and calculate how much they need to set aside for taxes. It also helps users keep track of their business, property, and personal finances, providing accurate figures at their fingertips.

The portal also allows users to share their business records with their accountant or bookkeeper in real&#8209;time, eliminating the need for downloading bank statements and searching for receipts.

## Client’s challenges

Financial management can be a daunting task for many people, especially for those who are not well&#8209;versed in the intricacies of accounting, so it is imperative that the application is designed with simplicity and ease of use in mind. Therefore, it is essential to address any setbacks that may discourage potential users from onboarding to the app.

Even after a seamless onboarding process, gaining and retaining the trust of users can be achieved through stable and reliable in&#8209;app functionalities, well&#8209;grounded open banking integrations, and precise bookkeeping.

When speaking of finances, security is one of the top&#8209;level priorities. It is crucial to ensure that clients’ data and accounts are safe and protected.

## Our approach

During the initial planning phase of the project, our team was hired in order to ensure a seamless and efficient development process. By being involved from the very beginning, we were able to address any potential issues or suggest improvements for the initial plans.

Our collaboration with the design team allowed us to gain a deeper understanding of the user interface and experience. On the other hand, by working closely with the development team, we were able to create a comprehensive schedule that incorporated a sprint&#8209;based workflow, ensuring that each feature was thoroughly tested before moving on to the next phase.

During our user interface testing, our focus is on ensuring that the application is easy to navigate and understand, with clear and concise instructions, validation messages, and warning models that are easily understandable even by non&#8209;tech&#8209;savvy clients.

We covered cross&#8209;browser and cross&#8209;platform testing, including mobile and desktop, in order to ensure a smooth user experience across different devices and platforms.

### To retain users’ trust, calculation errors are unacceptable

Good quality testing requires thorough verification of any cash flow into and out of the account. This implies sending all kinds of transactions via a simulator and verification on the app. When testing external connections, we pay close attention to ensure that those transactions are taken into account for tax estimation or Value Added Tax. Transaction testing, besides calculations, involves checking their categorization, merchant logos, and attachments.

Invoicing is checked in the application, backend, and e&#8209;mail. Client’s details, due dates, VAT, PayPal integration, the preview of PDF file, etc., are double&#8209;checked in multiple scenarios to make sure they are carried over to the client’s e&#8209;mail correctly. After confirmatory and investigative testing gives adequate results, a complete regression test run is done to maintain the quality of the application across release cycles.
We create test cases and automate them using Java, JUnit, and Appium for the mobile application to increase the regression testing’s runtime and efficiency.

### Stress testing

The overall user experience hinges on the application's ability to remain stable and responsive under stress. To ensure that the application is up to the task, we conduct stress testing, which involves subjecting it to high levels of activity and network throttling. This helps us identify issues such as crashes, prolonged loading times, or generic errors. By addressing these issues early on, we can speed up the development cycle and deliver a more robust product.

### Security testing

Special set of test cases was created and conducted daily to cover the critical three&#8209;factor security during onboarding or logging in (phone number, private code, and confirmation code). Damaged, lost or stolen cards are real and very common scenarios, and card blocking via the app, or by customer support, is verified frequently along with the private code change or logging in from the other devices to prevent possible fraudster scenarios. Furthermore, the app needs to be compliant with the GDPR (General Data Protection Regulation).

### Backend testing

Once a user has successfully passed the ‘Know Your Customer’ (KYC) flow and has been verified as safe and legitimate, we verify that the user's saved details are correctly communicated between the application and the backend by comparing them against the administrator's records.

As we strive to create a comprehensive bookkeeping app by integrating external money transfer components such as PayPal or banks, testing becomes more complex and requires comprehensive contract testing using the automated testing framework created with Java, JUnit and Selenium.

Customer support must have access to all user’s details and events to keep up to date. Monitoring the transactions, connections, and integrations requires testing as well for any potential security issues, such as unauthorized or unfamiliar transactions, so that customer support can track them down and take appropriate action, such as blocking the account.

## Value delivered

Our testing team has achieved exceptional results through a combination of measures that have ensured a seamless and efficient development process.

We have prioritized the development of a user&#8209;centric application that provides a sense of support to users, addressed any setbacks that may discourage potential users from onboarding to the app, and conducted stress testing to ensure that the application remains stable and responsive under all conditions.

Our team has placed significant emphasis on security by daily verifying the three&#8209;factor security during onboarding or logging in, blocking damaged, lost, or stolen cards through the app or by customer support, and ensuring that the application is compliant with GDPR.

Our comprehensive testing strategy has focused on guaranteeing that the application is fully functional and entirely free of errors.
