/********\
| Models |
\*******/
var modelBIO = {
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
  "biopic": "images/Logo.svg"
};

var modelWork = {
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
  ]
};

var modelProjects = {
  "projects": [
    {
      "title": "Intro Project",
      "dates": "March 16, 2015",
      "description": "The purpose of this project was to create a basic HTML page with the correct structure. The page should contain the text \"Hello World!\". Then, using CSS, the text color should be changed to red.",
      "images": ["images/IntroProject.png"],
      "link": "http://jerryahames.github.io/ND001-HTML-5-Hello-World",
    },
    {
      "title": "P1. Build a Portfolio Site",
      "dates": "April 13, 2015",
      "description": "The purpose of this project was to create a portfolio web site based on a design mockup. The portfolio should be customized with custom colors, content and my own images.",
      "images": ["images/Project1.jpg"],
      "link": "http://jerryahames.github.io/P1-Build-a-Portfolio-Site",
    },
    {
      "title": "P2. Online Resume",
      "dates": "May 11, 2015",
      "description": "The purpose of this project was to demonstrate mastery of the javascript language's syntax through a series of challenges. We were given a base framework and, using javascript, were asked to manipulate the DOM to create a web page.",
      "images": ["images/Project2.jpg"],
      "link": "http://jerryahames.github.io/P2-Online-Resume",
    },
    {
      "title": "P3. Classic Arcade Game Clone",
      "dates": "June 22, 2015",
      "description": "Given a skeleton, complete the classic arcade game Frogger using Object oriented javascript techniques.",
      "images": ["images/Project3.jpg"],
      "link": "http://jerryahames.github.io/P3-Classic-Arcade-Game-Clone",
    },
    {
      "title": "P4. Website Optimization",
      "dates": "July 20, 2015",
      "description": "Optimize a provided website with a number of optimization and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
      "images": ["images/Project4.jpg"],
      "link": "http://jerryahames.github.io/P4-Website-Optimization",
    },
    {
      "title": "P5. Neighborhood Map Project",
      "dates": "September 7, 2015",
      "description": "Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
      "images": ["images/Project5.jpg"],
      "link": "http://jerryahames.github.io/P5-Neighborhood-Map",
    },
    {
      "title": "P6. Feed Reader Testing",
      "dates": "October 12, 2015",
      "description": "Learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as \"test-driven development\" or TDD. This is when developers write tests first, before they ever start developing their application. <br><br>Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!",
      "images": ["images/Project6.jpg"],
      "link": "http://jerryahames.github.io/P6-Feed-Reader-Testing",
    }
  ]
};

var modelEducation = {
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
  ]
}
/********\
| Views |
\*******/

var view = {
  $header: $("#header"),
  $topContacts: $("#topContacts"),
  $footerContacts: $("#footerContacts"),
  $WorkExperience: $("#workExperience"),
  $projects: $("#projects"),
  $education: $("#education"),
  render: function() {
    this.renderBIO();
    this.renderWork();
    this.renderProjects();
    this.renderEducation();
    this.renderMap();

    $("#letsConnect").removeClass("dark-gray");
  },
  renderBIO: function() {
    //Name, Skills, Contacts. Don't forget to Add conacts to the top and bottom.
    this.$header.addClass("full");
    this.renderBIODetails();
    this.renderBIOSkills();
    this.renderBIOContacts(this.$topContacts);
    this.renderBIOContacts(this.$footerContacts);
  },
  renderBIODetails: function() {
    var bio = modelview.GetBIOModel();
    //Name, Pic, Message, Role
    //We want to make sure these are at the start of the BIO section, so prepend
    // them in reverse order.
    var fMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    this.$header.append(fMsg);

    var fPic = HTMLbioPic.replace("%data%", bio.biopic);
    this.$header.append(fPic);

    var fRole = HTMLheaderRole.replace("%data%", bio.role) + "</div>";
    this.$header.prepend(fRole);

    var fName = HTMLheaderName.replace("%data%", bio.name);
    this.$header.prepend(fName);
  },
  renderBIOSkills: function() {

    var skills = modelview.GetBIOSkills();
    if(skills.length > 0)
    {
      //Don't forget to start the Skills section.
      this.$header.append(HTMLskillsStart);

      //Loop through all the skills
      var $skills = $("#skills");
      for(skillIndex in skills)
      {
        var fSkill = HTMLskills.replace("%data%", skills[skillIndex]);
        $skills.append(fSkill);
      }
    }
    $("#skills").removeClass('flex-box');
  },
  renderBIOContacts: function($element) {
    var contacts = modelview.GetBIOContacts();

    $element.addClass("full");
    //Loop through all of the contacts.
    // Lets use the generic contact so that I can loop through all the entries.
    for(var key in contacts)
    {
      //if any of these values is empty, then don't display it.
      //People can't contact me there anyway, and a blank value looks bad.
      if(contacts[key] != "")
      {

        var fContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", contacts[key]);
        $element.append(fContact);
      }
    }
  },
  renderWork: function() {
    var jobs = modelview.GetJobs();
    this.$WorkExperience.addClass("full");
    for(jobIndex in jobs)
    {
      this.$WorkExperience.append(HTMLworkStart);
      var fEmployer= HTMLworkEmployer.replace("%data%", jobs[jobIndex].employer);
      var fTitle = HTMLworkTitle.replace("%data%", jobs[jobIndex].title);
      var fET = fEmployer + fTitle;
      $(".work-entry:last").append(fET);

      var fworkLocation = HTMLworkLocation.replace("%data%", jobs[jobIndex].location);
      $(".work-entry:last").append(fworkLocation);
      var fDates = HTMLworkDates.replace("%data%", jobs[jobIndex].dates);
      $(".work-entry:last").append(fDates);
      var fworkDescription = HTMLworkDescription.replace("%data%", jobs[jobIndex].description);
      $(".work-entry:last").append(fworkDescription);
    }
  },
  renderProjects: function() {
    var projects = modelview.GetProjects();
    this.$projects.addClass("full");

    for(projectIndex in projects)
    {
      this.$projects.append(HTMLprojectStart);
      var fTitle = HTMLprojectTitle.replace("%data%", projects[projectIndex].title);
      fTitle = fTitle.replace("%link%", projects[projectIndex].link);
      var fDates = HTMLprojectDates.replace("%data%", projects[projectIndex].dates);
      var fDescription = HTMLprojectDescription.replace("%data%", projects[projectIndex].description);

      $(".project-entry:last").append(fTitle);
      $(".project-entry:last").append(fDates);
      $(".project-entry:last").append(fDescription);

      for(var imageIndex in projects[projectIndex].images)
      {
        var fImage = HTMLprojectImage.replace("%data%", projects[projectIndex].images[imageIndex]);
        $(".project-entry:last").append(fImage);
      }
    }
  },
  renderEducation: function()
  {
    this.$education.addClass("full");

    this.renderSchool();
    this.renderOnline();
  },
  renderOnline: function()
  {
    var onlineCourses = modelview.GetOnlineCourses();
    $("#education").append(HTMLonlineClasses);

    for(var courseIndex in onlineCourses)
    {
      this.$education.append(HTMLschoolStart);

      var fTitle = HTMLonlineTitle.replace("%data%", onlineCourses[courseIndex].title);
      var fSchool = HTMLonlineSchool.replace("%data%", onlineCourses[courseIndex].school);
      var fTS = fTitle + fSchool;
      $(".education-entry:last").append(fTS);

      var fDates = HTMLonlineDates.replace("%data%", onlineCourses[courseIndex].dates);
      $(".education-entry:last").append(fDates);

      var fURL = HTMLonlineURL.replace("%data%", onlineCourses[courseIndex].url);
      $(".education-entry:last").append(fURL);
    }
  },
  renderSchool: function()
  {
    var schools = modelview.GetSchools();
    for(schoolIndex in schools)
    {
      this.$education.append(HTMLschoolStart);

      var fName = HTMLschoolName.replace("%data%", schools[schoolIndex].name);
      var fDegree = HTMLschoolDegree.replace("%data%", schools[schoolIndex].degree);
      var fND = fName + fDegree;
      $(".education-entry:last").append(fND);

      var fDates = HTMLschoolDates.replace("%data%", schools[schoolIndex].dates);
      $(".education-entry:last").append(fDates);
      var fLocation = HTMLschoolLocation.replace("%data%", schools[schoolIndex].location);
      $(".education-entry:last").append(fLocation);

      for(var majorIndex in schools[schoolIndex].majors)
      {
        var fMajor = HTMLschoolMajor.replace("%data%", schools[schoolIndex].majors[majorIndex]);
        $(".education-entry:last").append(fMajor);
      }
    }
  },
  renderMap: function()
  {
    $("#mapDiv").addClass("full");
    $("#mapDiv").append(googleMap);
  }
};

/************\
| Model View |
\***********/
var modelview = {
  GetBIOModel: function() {
    return modelBIO;
  },
  GetBIOContacts: function() {
    return modelBIO.contacts;
  },
  GetBIOSkills: function() {
    return modelBIO.skills;
  },
  GetJobs: function() {
    return modelWork.jobs;
  },
  GetProjects: function() {
    return modelProjects.projects;
  },
  GetOnlineCourses: function() {
    return modelEducation.onlineCourses;
  },
  GetSchools: function() {
    return modelEducation.schools;
  }
}


//Display all the data
view.render();
