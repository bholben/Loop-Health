
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
            question: 'Get the doctor to tell me about long-term recovery plans and how to get around.',
            completed: true
          },
          {
            id: 2,
            question: 'Ask about wheelchair recommendations.',
            completed: false
          },
          {
            id: 3,
            question: 'How to deal with bed sores?',
            completed: false
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
      },
      {
        id: 12,
        time: '2015-04-10T21:50:43.511Z',
        name: 'Dr. Marina Costa',
        title: 'Physician',
        role: 'Attending',
        department: 'Cardiology',
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

    return {
      getVisits: function () {
        return visits;
      },
    };

  });

}());

