var bio = {
    "name": "Margarita Grigoryan",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "7-909-088-00-88",
        "email": "mrggrgr@gmail.com",
        "github": "mrggrgr",
        "twitter": "@mrggrgr",
        "location": "Moscow"
    },
    "welcomeMessage": "Hi there! I see trees of green, red roses too. I see them bloom for me and you. And I think to myself what a wonderful world.",
    "skills": [
        "html", "css", "js", "jquery", "beetroot and cabbage soup"
    ],
    "bioPic": "./images/my-pic.jpg"
};

var education = {
    "schools": [
        {
            "name": "No. 343",
            "location": "Veliki Novgorod",
            "degree": "Student",
            "majors": [
            "math",
            "geometry"
            ],
            "dates": 2008,
            "url": "school343.ru"
        },
        {
            "name": "No. 591",
            "location": "Kazan",
            "degree": "Student",
            "majors": [
            "history",
            "sociology"
            ],
            "dates": 2010,
            "url": "school591.ru"
        }
    ],
    "onlineCourses": [
        {
            "title": "Website Performance Optimization",
            "school": "Udacity",
            "dates": "February 2015",
            "url": "https://www.udacity.com/course/ud884"
          },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "June 2015",
            "url": "https://www.udacity.com/course/ud804"
          }
        ]
};

var work = {
    "jobs": [
        {
            "employer": "Academy of Business",
            "title": "Assistant",
            "location": "Yaroslavl",
            "dates": "2012-2014",
            "description": "Personal assistants are mostly expected to do different administrative task such as answering telephones and emails, filing records, setting-up itineraries for their employer when traveling or those guests coming to visit their company and arranging relevant meetings. Oftentimes, clerical jobs are delegated to those personal assistants with less work experience."
        },
        {
            "employer": "Shademy of Awesomeness",
            "title": "Web Developer",
            "location": "Saints-Petersburg",
            "dates": "2014-2015",
            "description": "I was working for a brand name in the surging digital industry. The job gave me many opportunities to code beautiful and elegant Front End for web and software applications. I was able to learn and develop there coding skills in a friendly environment. I got some great skills on your CV at an early stage in my career!"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Responsive Portfolio",
            "dates": "May 2015",
            "description": "Working on my beautiful responsive portfolio. Applause!",
            "images": [
            "./images/project-1-medium-300_1x.jpg",
            "./images/project-1-mobile-medium-300_1x.jpg"
            ]
        },
        {
            "title": "JS Built Resume",
            "dates": "June 2015",
            "description": "Having fun while working on my awesome resume and plunging into Javascript.",
            "images": [
            "./images/project-2-medium-300_1x.jpg",
            "./images/project-2-code-medium-300_1x.jpg"
            ]
        }
    ]
};



bio.display = function () {
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLtwitter.replace("%data%", bio.contacts.twitter) + HTMLgithub.replace("%data%", bio.contacts.github) + HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic) + HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    };
};

work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle).append(HTMLworkDates.replace("%data%", work.jobs[job].dates)).append(HTMLworkLocation.replace("%data%", work.jobs[job].location)).append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}
projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title)).append(HTMLprojectDates.replace("%data%", projects.projects[project].dates)).append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        if (projects.projects[project].images.length > 0) {
            for (var i = 0; i < projects.projects[project].images.length; i++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[i]));
            }
        }
    }
}

education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)).append(HTMLschoolDates.replace("%data%", education.schools[school].dates)).append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        if (education.schools[school].majors.length > 0) {
            for (var i = 0; i < education.schools[school].majors.length; i++) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]));
            }
        }
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (onlineCourse in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school)).append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates)).append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
        }
    }
}

bio.display();
work.display();
projects.display();
education.display();


function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));

$("#main").append(internationalizeButton);

function inName() {
    n = $("#name").text().split(" ");
    n[1] = n[1].toUpperCase();
    finalName = n.join(" ");
    return finalName;
}

$("#mapDiv").append(googleMap);