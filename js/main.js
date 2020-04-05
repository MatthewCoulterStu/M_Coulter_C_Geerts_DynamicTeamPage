    (() => {

    var displayedMember = "matt";

    var carterName = "Carter Geerts"
    var carterRole = "Designer"
    var carterFLine = "Wassup, I’m Carter G, the designer of this masterpiece."
    var carterBody = "Becoming a full-time online media designer is my dream. I’ve worked with many different programs and tools to enhance videos and image design quality. Artistic capabilities on the internet are almost endless. Smart designs can be used to increase efficiency and enjoyment. They can quickly show your abilities and strengths I am working on expanding my YouTube channel and GitHub account as they make more great portfolios. I am working on enhancing my web design skills at Fanshawe to gain more opportunities online."
    var carterIcon = 'images/carterIcon.png'
    var mattName = "Matthew Coulter"
    var mattRole = "Developer"
    var mattFLine = "I’m Matt Coulter, the programmer here"
    var mattBody = "I’m Matt Coulter, the programmer here. I am proficient in CSS and am learning Javascript and Python.I also have an interest in videography and graphic design. Basically, if i can do it with a computer, I want to try it! While I am more skilled in the design side of the field, I am pushing myself to improve my coding skills so that I can be a full stack developer and work on the many independent projects I want to pursue as well as freelancing for small businesses!"
    var mattIcon = 'images/mattIcon.jpg'

    function bioSwitch() {
      if (displayedMember === 'matt') {
      	displayedMember = 'carter'
        document.getElementById("bioName").innerHTML = carterName;
        document.getElementById("bioRole").innerHTML = carterRole;
        document.getElementById("firstLine").innerHTML = carterFLine;
        document.getElementById("bodyText").innerHTML = carterBody;
        document.getElementById('icon').src = 'images/carterIcon.png';
        document.getElementById('switchIcon').src = 'images/mattIcon.jpg'
      } else {
      	displayedMember = 'matt'
        document.getElementById("bioName").innerHTML = mattName;
        document.getElementById("bioRole").innerHTML = mattRole;
        document.getElementById("firstLine").innerHTML = mattFLine;
        document.getElementById("bodyText").innerHTML = mattBody;
        document.getElementById('icon').src = 'images/mattIcon.jpg';
        document.getElementById('switchIcon').src = 'images/carterIcon.png'
      }

    }
    document.getElementById('switchIcon').addEventListener('click', bioSwitch, false);
    })();