var bio = {
  "name": "Jerry Hames",
  "role": "Project Manager",
  "contacts": {
    "mobile": "(817) 123-4567",
    "email": "jerrysemail@gmail.com",
    "github": "JerryAHames",
    "twitter": "@JerrysTwitter",
    "location": "Fort Worth",
  },
  "welcomeMessage": "Welcome to my resume! Take a seat and stay awhile. Just leave your seat behind when you leave.",
  "skills": ["Learning", "Programming", "C#", "JS"],
  "biopic": "images/Logo.svg",

  "display": function()
  {
    $("#header").addClass("full");
    //Name, Skills, Contacts. Don't forget to Add conacts to the top and bottom.
    this.displayBIO();
    this.displaySkills();
    this.displayContacts("#topContacts");
    this.displayContacts("#footerContacts");

    $("#skills").removeClass('flex-box');
  },
  "displayBIO": function()
  {
    //Name, Pic, Message, Role
    //We want to make sure these are at the start of the BIO section, so prepend
    // them in reverse order.
    var fMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(fMsg);

    var fPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(fPic);

    var fRole = HTMLheaderRole.replace("%data%", bio.role) + "</div>";
    $("#header").prepend(fRole);

    var fName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(fName);
  },
  "displaySkills": function()
  {
    if(this.skills.length > 0)
    {
      //Don't forget to start the Skills section.
      $("#header").append(HTMLskillsStart);

      //Loop through all the skills
      for(skillIndex in this.skills)
      {
        var fSkill = HTMLskills.replace("%data%", this.skills[skillIndex]);
        $("#skills").append(fSkill);
      }
    }
  },
  "displayContacts": function(elementid)
  {
    $(elementid).addClass("full");
    //Loop through all of the contacts.
    // Lets use the generic contact so that I can loop through all the entries.
    for(var key in this.contacts)
    {
      //if any of these values is empty, then don't display it.
      //People can't contact me there anyway, and a blank value looks bad.
      if(this.contacts[key] != "")
      {
        var fContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", this.contacts[key]);
        $(elementid).append(fContact);
      }
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "Current Job",
      "title": "Project Manager",
      "location": "Fort Worth, TX",
      "dates": "May 2007 - Present",
      "description": "I currently develop desktop applications using C# / winforms as a front end and microsoft SQL server as a back end."
    },
    {
      "employer": "Texas Tech University",
      "title": "Peer Advisor",
      "location": "Lubbock, TX",
      "dates": "August 2006 - May 2007",
      "description": "A Peer Advisor acts a mentor to Community Advisors. Peer Advisors live and work in the residence halls, but unlike a CA, Peer Advisors are not directly responsible for mentoring the students."
    },
    {
      "employer": "Texas Tech University",
      "title": "Community Advisor",
      "location": "Lubbock, TX",
      "dates": "February 2004 - May 2006",
      "description": "A Community Advisor is a mentor to students living in the residence halls. Community Advisors live, work and study with their fellow students while providing opportunities for academic, personal and professional growth."
    }
  ],
  "display": function()
  {
    $("#workExperience").addClass("full");
    for(jobIndex in work.jobs)
    {
      $("#workExperience").append(HTMLworkStart);
      var fEmployer= HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
      var fTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
      var fET = fEmployer + fTitle;
      $(".work-entry:last").append(fET);

      var fworkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
      $(".work-entry:last").append(fworkLocation);
      var fDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
      $(".work-entry:last").append(fDates);
      var fworkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
      $(".work-entry:last").append(fworkDescription);
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Intro Project",
      "dates": "March 16, 2015",
      "description": "The purpose of this project was to create a basic HTML page with the correct structure. The page should contain the text \"Hello World!\". Then, using CSS, the text color should be changed to red.",
      "images": ["images/IntroProject.png"]
    },
    {
      "title": "P1. Build a Portfolio Site",
      "dates": "April 13, 2015",
      "description": "The purpose of this project was to create a portfolio web site based on a design mockup. The portfolio should be customized with custom colors, content and my own images.",
      "images": ["images/Project1.jpg"]
    },
    {
      "title": "P2. Online Resume",
      "dates": "May 11, 2015",
      "description": "The purpose of this project was to demonstrate mastery of the javascript language's syntax through a series of challenges. We were given a base framework and, using javascript, were asked to manipulate the DOM to create a web page.",
      "images": ["images/Project2.jpg"]
    },
    {
      "title": "P3. Classic Arcade Game Clone",
      "dates": "June 22, 2015",
      "description": "Given a skeleton, complete the classic arcade game Frogger using Object oriented javascript techniques.",
      "images": ["images/Project3.jpg"]
    },
    {
      "title": "P4. Website Optimization",
      "dates": "July 20, 2015",
      "description": "Optimize a provided website with a number of optimization and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
      "images": ["images/ComingSoon.svg"]
    },
    {
      "title": "P5. Neighborhood Map Project",
      "dates": "September 7, 2015",
      "description": "Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
      "images": ["images/ComingSoon.svg"]
    },
    {
      "title": "P6. Feed Reader Testing",
      "dates": "October 12, 2015",
      "description": "Learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as \"test-driven development\" or TDD. This is when developers write tests first, before they ever start developing their application. <br><br>Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!",
      "images": ["images/ComingSoon.svg"]
    }
  ],
  "display": function()
  {
    $("#projects").addClass("full");

    for(projectIndex in this.projects)
    {
      $("#projects").append(HTMLprojectStart);
      var fTitle = HTMLprojectTitle.replace("%data%", this.projects[projectIndex].title);
      var fDates = HTMLprojectDates.replace("%data%", this.projects[projectIndex].dates);
      var fDescription = HTMLprojectDescription.replace("%data%", this.projects[projectIndex].description);

      $(".project-entry:last").append(fTitle);
      $(".project-entry:last").append(fDates);
      $(".project-entry:last").append(fDescription);

      for(var imageIndex in this.projects[projectIndex].images)
      {
        var fImage = HTMLprojectImage.replace("%data%", this.projects[projectIndex].images[imageIndex]);
        $(".project-entry:last").append(fImage);
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Texas Tech University",
      "location": "Lubbock",
      "degree": "Bachelor of Science",
      "majors": ["Computer Science"],
      "dates": 2007,
      "url": "www.ttu.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": 2015,
      "url": "www.udacity.com"
    },
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": 2012,
      "url": "www.udacity.com"
    }
  ],
  "display": function()
  {
    $("#education").addClass("full");

    this.displaySchool();
    this.displayOnline();
  },
  "displayOnline": function()
  {
    $("#education").append(HTMLonlineClasses);

    for(var courseIndex in this.onlineCourses)
    {
      $("#education").append(HTMLschoolStart);

      var fTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[courseIndex].title);
      var fSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[courseIndex].school);
      var fTS = fTitle + fSchool;
      $(".education-entry:last").append(fTS);

      var fDates = HTMLonlineDates.replace("%data%", this.onlineCourses[courseIndex].dates);
      $(".education-entry:last").append(fDates);

      var fURL = HTMLonlineURL.replace("%data%", this.onlineCourses[courseIndex].url);
      $(".education-entry:last").append(fURL);
    }
  },
  "displaySchool": function()
  {
    for(schoolIndex in this.schools)
    {
      $("#education").append(HTMLschoolStart);

      var fName = HTMLschoolName.replace("%data%", this.schools[schoolIndex].name);
      var fDegree = HTMLschoolDegree.replace("%data%", this.schools[schoolIndex].degree);
      var fND = fName + fDegree;
      $(".education-entry:last").append(fND);

      var fDates = HTMLschoolDates.replace("%data%", this.schools[schoolIndex].dates);
      $(".education-entry:last").append(fDates);
      var fLocation = HTMLschoolLocation.replace("%data%", this.schools[schoolIndex].location);
      $(".education-entry:last").append(fLocation);

      for(var majorIndex in this.schools[schoolIndex].majors)
      {
        var fMajor = HTMLschoolMajor.replace("%data%", this.schools[schoolIndex].majors[majorIndex]);
        $(".education-entry:last").append(fMajor);
      }
    }
  }
};

var map = {
  "display": function()
  {
    $("#mapDiv").addClass("full");
    $("#mapDiv").append(googleMap);
  }
};

//Display all the data
bio.display();
work.display();
projects.display();
education.display();
map.display();

$("#letsConnect").removeClass("dark-gray");
