


aggregate- Functions 
============================

1. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.CompanyDrives.aggregate([
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        Date: {
          $gt: "10/15/23",
          $lte:"10/31/23"
        },
      },
  },
])


2.  Find all the topics and tasks which are thought in the month of October.

db.Topics.aggregate([
  {
    '$lookup': {
      'from': 'Task', 
      'localField': 'Month', 
      'foreignField': 'Month', 
      'as': 'result'
    }
  }, {
    '$match': {
      'Month': 'October'
    }
  }
])


3. 

Find all the company drives and students who are appeared for the placement.



db.CompanyDrives.aggregate([
 
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        Palcements: "Yes",
      },
  },
])



4. Find the number of problems solved by the user in codekata.



[
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "codekata",
        localField: "Name",
        foreignField: "Name",
        as: "result",
      },
  },
]



5. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020



[
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "Task_users",
        localField: "Name",
        foreignField: "Users",
        as: "result",
      },
  },
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        Attendance: "Absent",
      },
  },
]

//

Examples

//

[
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "Task_users",
        localField: "Name",
        foreignField: "Users",
        as: "result",
      },
  },
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        Attendance: "Absent",
      },
  },
]