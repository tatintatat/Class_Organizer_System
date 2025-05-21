function login() {
    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;

    const trueuser = "admin";
    const truepass = "1234";
    if (account === trueuser && password === truepass) {
        showChoicePage();
    } else {
        alert("Please enter both account and password.");
    }
}
function loginWithGoogle() {
    alert("Logging in with Google... solid");
    showChoicePage();
}

function showChoicePage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('choicePage').style.display = 'flex';
    document.getElementById('choicePage').style.flexDirection = 'column';
    document.getElementById('choicePage').style.alignItems = 'center';
    document.getElementById('choicePage').style.justifyContent = 'center';
}

function chooseRole(role) {
    if (role === 'Student') ///STUDENTS PAGE
    {
        document.getElementById('choicePage').style.display = 'none';
        document.getElementById('STdashboardPage').style.display = 'flex';
        document.getElementById('STdashboardPage').style.flexDirection = 'column';
        document.getElementById('STdashboardPage').style.alignItems = 'center';
        document.getElementById('STdashboardPage').style.justifyContent = 'center';
        document.getElementById('teacherpage').style.display =  'none';
        document.getElementById('schedule-studentpage').style.display = "none";
        document.getElementById('more').style.display = "none";
        
    }
    else if (role === 'Teacher')  ///TEACHERS PAGE
    {
        document.getElementById('choicePage').style.display = 'none';
        document.getElementById('Teacher-Page').style.display = 'flex';
        document.getElementById('Teacher-Page').style.flexDirection = 'column';
        document.getElementById('Teacher-Page').style.alignItems = 'center';
        document.getElementById('Teacher-Page').style.justifyContent = 'center';
        document.getElementById('Secondpage').style.display = "none";
        document.getElementById('mores').style.display = "none";
        document.getElementById('schedule-studentpage').style.display = "none";
        document.getElementById('Secondpage').style.display = "none";
        
    }
}
function Teachers() /// TEACHER FOR STUDENTS PAGE
{
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('teacherpage').style.display =  'block';
  document.getElementById('schedule-studentpage').style.display = "none";
}
function home() /// HOMEPAGE FOR STUDENTS PAGE
{
    document.getElementById('teacherpage').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('schedule-studentpage').style.display = "none";
}
function schedulestudent() /// SCHEDULE FOR STUDENTS PAGE
{
    document.getElementById('schedule-studentpage').style.display = "block";
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('teacherpage').style.display = 'none';
}
function more() ///THREE BARS
{ 
  const moreElement = document.getElementById('more');
  
  if (moreElement.style.display === 'none' || moreElement.style.display === '') {
    moreElement.style.display = 'block';
  } else {
    moreElement.style.display = 'none';
  }
}
function logout()
{
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('Teacher-Page').style.display = 'none';
    document.getElementById('STdashboardPage').style.display = 'none';
}
/// FOR TEACHERS MAINPAGE
function secondpage()
{
    document.getElementById('Secondpage').style.display = "block";
    document.getElementById('Mainpage').style.display = "none";
}
function mainpage()
{
    document.getElementById('Secondpage').style.display = "none";
    document.getElementById('Mainpage').style.display = "block";
}
function bars()
{
    const moresElement = document.getElementById('mores');
    if (moresElement.style.display === 'none' || moresElement.style.display === '') {
    moresElement.style.display = 'block';
    } else {
    moresElement.style.display = 'none';
    }
}