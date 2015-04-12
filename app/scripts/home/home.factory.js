
;(function () {
  'use strict';

  angular.module('app.home')

  .factory('HomeFactory', function () {

    var visits = [
      {
        id: 1,
        time: '2015-04-11T13:25:43.511Z',
        name: 'Dr. Marina Costa',
        title: 'Physician',
        role: 'Attending',
        department: 'Cardiology',
        questions: [
          {
            id: 1,
            question: 'When can I start eating salt again? Can you review my diet restrictions again?',
            completed: false
          },
          {
            id: 2,
            question: 'Why are my blood pressure medications different then I take at home?',
            completed: true
          },
          {
            id: 3,
            question: 'What is Lovenox? Why am I on it?',
            completed: false
          },
        ]
      },
      {
        id: 2,
        time: '2015-04-11T13:03:43.511Z',
        name: 'Dr. Charles Barnes',
        title: 'Physician',
        role: 'Attending',
        department: 'General Surgery',
        questions: [
          {
            id: 1,
            question: 'My daughter wanted to ask, how can she prepare my room at home?',
            completed: true
          },
          {
            id: 2,
            question: 'Ask about wheelchair recommendations.',
            completed: true
          },
          {
            id: 3,
            question: 'How do I deal with bed sores?',
            completed: true
          },
          {
            id: 4,
            question: 'I\'ve been constipated for the past week, is that normal?',
            completed: true
          },
        ]
      },
      {
        id: 3,
        time: '2015-04-11T12:20:43.511Z',
        name: 'Julien Nobert',
        title: 'Nurse',
        department: 'Nursing',
      },
      {
        id: 4,
        time: '2015-04-11T12:04:43.511Z',
        name: 'Dr. Ilya Kovalyov',
        title: 'Physician',
        role: 'Resident',
        department: 'Cardiology',

        questions: [
          {
            id: 1,
            question: 'When can I start eating salt again? Can you review my diet restrictions again?',
            completed: true
            },
          {
            id: 2,
            question: 'Why are my blood pressure medications different then I take at home?',
            completed: true
          },
          {
            id: 3,
            question: 'What is Lovenox? Why am I on it?',
            completed: true
          },
        ]
      },
      {
        id: 5,
        time: '2015-04-11T11:48:43.511Z',
        name: 'Kristi Jones',
        title: 'Nurse',
        department: 'Nursing',
      },
      {
        id: 6,
        time: '2015-04-11T10:30:43.511Z',
        name: 'Dr. Lora Sedlacek',
        title: 'Resident',
        role: 'Attending',
        department: 'General Surgery',


        questions: [
          {
            id: 1,
            question: 'Ask about wheelchair recommendations.',
            completed: true
          },
          {
            id: 2,
            question: 'How do I deal with bed sores?',
            completed: true
          },
    {
            id: 3,
            question: 'I\'92ve been constipated for the past week, is that normal?',
            completed: true
          },
        ]
      },
      {
        id: 7,
        time: '2015-04-10T03:30:43.511Z',
        name: 'Kristi Jones',
        title: 'Nurse',
        department: 'Nursing',
      },
      {
        id: 8,
        time: '2015-04-10T01:20:43.511Z',
        name: 'Kristi Jones',
        title: 'Nurse',
        department: 'Nursing',
      },
      {
        id: 9,
        time: '2015-04-10T23:50:43.511Z',
        name: 'Dr. Lora Sedlacek',
        title: 'Resident',
        role: 'Attending',
        department: 'General Surgery',
        questions: [
          {
            id: 1,
            question: 'Ask about wheelchair recommendations.',
            completed: true
          },
          {
            id: 2,
            question: 'How do I deal with bed sores?',
            completed: true
          },
          {
            id: 3,
            question: 'I\'ve been constipated for the past week, is that normal?',
            completed: true
          },
        ]
      },
      {
        id: 10,
        time: '2015-04-10T23:02:43.511Z',
        name: 'Julien Nobert',
        title: 'Nurse',
        department: 'Nursing',
      },
      {
        id: 11,
        time: '2015-04-10T22:02:43.511Z',
        name: 'Dr. Dennis Schulze',
        title: 'Physician',
        role: 'Resident',
        department: 'Nephrology',
        questions: [
          {
            id: 1,
            question: 'What does high creatine mean? What do I need to do to decrease this?',
            completed: true
          },
          {
            id: 2,
            question: 'Will it help if I drink more than 8 cups of water per day?',
            completed: true
          },
        ]
      },
      {
        id: 12,
        time: '2015-04-10T21:50:43.511Z',
        name: 'Dr. Marina Costa',
        title: 'Physician',
        role: 'Attending',
        department: 'Cardiology',
        questions: [
          {
            id: 1,
            question: 'My blood pressure medications different then I take at home? why?',
            completed: true
          },
          {
            id: 2,
            question: 'What is Lovenox? Why am I on it?',
            completed: true
          },
          {
            id: 3,
            question: 'Dr. Costa, when can I start eating salt again? Can you review',
            completed: true
          },
          {
            id: 4,
            question: 'What is heparin? Why am I on it? I don’t like being on meds I dont need, how, can I be off of it?',
            completed: true
          }
        ]
      },
      {
        id: 13,
        time: '2015-04-10T19:20:43.511Z',
        name: 'Dr. Ilya Kovalyov',
        title: 'Physician',
        role: 'Resident',
        department: 'Cardiology',
      },
    ];

    var colorMap = {
      Cardiology: 'deptCardio',
      Nephrology: 'deptPT',
      'General Surgery': 'deptOncology',
      Nursing: 'deptNurse',
    };

    var tempImageMap = {
      'Dr. Marina Costa': 'Marina',
      'Dr. Charles Barnes': 'Charles',
      'Julien Nobert': 'Julien',
      'Dr. Ilya Kovalyov': 'Ilya',
      'Kristi Jones': 'Kristi',
      'Dr. Lora Sedlacek': 'Lora',
      'Dr. Dennis Schulze': 'Dennis',
    };

    visits.forEach(function (visit) {
      visit.colorDept = colorMap[visit.department];
      visit.imageName = tempImageMap[visit.name];
    });

    var departments = {};
    visits.forEach(function (visit) {
      if (!departments[visit.department]) {
        departments[visit.department] = [visit.id];
      } else {
        departments[visit.department].push(visit.id);
      }
    });

    console.log(departments);

    return {
      getVisits: function () {
        return visits;
      },
    };

  });

}());

