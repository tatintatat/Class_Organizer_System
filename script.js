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
    alert("Logging in with Google...");
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
    if (role === 'Student')
    {
        document.getElementById('choicePage').style.display = 'none';
        document.getElementById('STdashboardPage').style.display = 'flex';
        document.getElementById('STdashboardPage').style.flexDirection = 'column';
        document.getElementById('STdashboardPage').style.alignItems = 'center';
        document.getElementById('STdashboardPage').style.justifyContent = 'center';
        document.getElementById('teacherpage').style.display =  'none';
        document.getElementById('schedule-studentpage').style.display = "none";
        
    }
    else if (role === 'Teacher')
    {
        document.getElementById('choicePage').style.display = 'none';
    }
}
function Teachers()
{
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('teacherpage').style.display =  'block';
  document.getElementById('schedule-studentpage').style.display = "none";
}
function home()
{
    document.getElementById('teacherpage').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('schedule-studentpage').style.display = "none";
}
function schedulestudent()
{
    document.getElementById('schedule-studentpage').style.display = "block";
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('teacherpage').style.display = 'none';
}
