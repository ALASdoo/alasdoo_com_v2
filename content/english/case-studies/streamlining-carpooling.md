---
date: '2023-03-09'
draft: false
title: 'Streamlining carpooling'
subtitle: 'Prioritizing convenience, safety, and integration for modern families'
image: 'images/case-studies/GoKid.jpg'
alt: 'A boy and a man discussing a route on a monitor in a car.'
industry: 'TRANSPORTATION'
keywords:
  [
    'Transportation',
    'Carpool',
    'Usability testing',
    'Security',
    'Live tracking testing',
    'Cross-browser',
  ]
---

## About the client

An award&#8209;winning family organization app, which was launched in 2016, has been making a significant impact on the way families, schools, and teams organize transportation. The app, now available worldwide, offers a convenient solution for carpool scheduling and includes additional features such as route optimization, reminders, and an in&#8209;app chat.

## Client’s challenges

In today's fast&#8209;paced world, effective organization is crucial, especially when it comes to handling the schedules and activities of children. Arranging transportation with other families while also handling work obligations can be difficult.

As the client has hired us to achieve assimilation of the app into the daily routine of families, schools, and teams, our focus during testing is on ensuring that the shared transportation solution is user&#8209;friendly, time&#8209;efficient, and seamlessly integrated.

Above all, the safety of children and the peace of mind of parents are prioritized during the testing process.

## Our approach

As part of our daily routine, we conduct smoke and exploratory testing on the web and iOS and Android mobile apps for family accounts. This type of testing is performed on the staging server before it goes live.

### Usability testing

#### Creating an account

Our testing process starts by setting up a family account, adding family members, and ensuring that each account for a child or adult contains distinct details. We also verify that a phone number or email is added for each child, allowing them to log in with a family password, while both phone number and email are required for adults since they may act as drivers.

#### Scheduling a carpool

We check if carpool scheduling is working correctly by adding kids or automatically selecting a kid when there's only one child in the family. Google Map integrations are used to verify the correct address for the kid's home and to show the route with all the stopping places.

Tests have also been conducted on the process of joining a carpool as an invitee. Simultaneously, we sync Google calendar and [TeamSnap](https://www.teamsnap.com/)/[SportsEngine](https://www.sportsengine.com/) integrations to schedule group activities and handle carpool organization, which can be affected by changing schedules.

We conduct parallel testing on multiple devices to verify the details of invitations sent to families or received from other families. Once the carpool is set up, it must be visible in all participants' schedules, with parents having the option to volunteer as a driver. Testing this feature is crucial since the schedule screen can become overloaded and prone to crashing.

#### Reminders

We test automated reminders for kids and parents, including notifications that remind them of upcoming events. Opting out of a carpool is also tested, which can be done for a single instance or the entire carpool. In such cases, families should not receive any notifications or appear on the driving map.

#### School platform

Another important part of testing involves cross&#8209;browser testing of web platforms created for schools and parents. This platform helps schools gather basic information about families to facilitate connections for carpooling. Our testing includes verifying parent logins, displaying all families' locations on the map, and testing carpool invitations and in&#8209;app messaging to improve parent connections.

### The biggest challenge: Ensuring safety of the users

#### How do we assure that only trusted drivers can participate in the carpool?

As a part of security testing, we test the invitations that parents send to other families to join, thus assuring that only trusted drivers can participate in the carpool. Only families with their kids in a carpool can be drivers; we test that the user cannot create a carpool if no kids are registered or drive if their kid is not in that carpool.

Kids must be able to log into the family account, so they can be certain who is picking them up on that day and get home safely.

#### How do we perform live tracking testing?

The main challenge with live tracking testing is that it obviously cannot be done from the office. Thus, this is performed while driving, following the route that Google Maps integration proposes, which must be displayed in the parents' app.

On a ride, we brainstorm and test out possible security inconveniences like missing notifications or even a crash of the application, then recover from it.

Notifications that a parent receives when a child has entered a car or is dropped at the desired location are always tested in real&#8209;time while driving, with multiple devices that we bring to test rides to check if parents will be informed promptly.

## Value delivered

The aim of the testing was to ensure that the family organization app is straightforward, reliable, and useful, ultimately leading to a well&#8209;organized community. By thoroughly testing the app's features, such as carpool scheduling, route optimization, reminders, and in-app chat, our testing team ensures that the app meets the needs of families, schools, and teams.

One of the key aspects of the app is its ability to help families organize carpools with trusted friends, families, and neighbors without the involvement of strangers or paid drivers. By testing the security and safety features of the app, such as ensuring that only families with their kids in a carpool can be drivers and testing real&#8209;time notifications when a child has entered or exited a car, our team ensures that the app provides a secure and reliable transportation solution for families.
