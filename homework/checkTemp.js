function checkTemp(temp) {
    if (temp <= 20) {
    return -1
    }
    if (temp >=21 && temp <=40) {
    return 0
    }
    if (temp >=41 && temp <=60){
    return 1
    }
}
