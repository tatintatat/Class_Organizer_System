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
    alert("You selected: " + role);
    document.getElementById('choicePage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'block';
}
