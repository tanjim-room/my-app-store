const getInstallApps = () => {
    const installApps = localStorage.getItem('installApps');
    if(installApps) {
        return JSON.parse(installApps);
    }
    else{
        return [];
    }
}

const addToInstallList = (appId) => {
    const installApps = getInstallApps();
    if(!installApps.includes(appId)) {
        installApps.push(appId);
        localStorage.setItem('installApps', JSON.stringify(installApps));
    }
    // else{
    //     alert('App is already in the install list');
    // }
}

const uninstallFromList = (appId) => {
    const installApps = getInstallApps();
    const updatedInstallApps = installApps.filter(id => id !== appId);
    localStorage.setItem('installApps', JSON.stringify(updatedInstallApps));
}

export { getInstallApps, addToInstallList, uninstallFromList };