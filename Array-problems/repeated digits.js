function repeatingDigits(len) {
    for (var n = 0; n < 1000; n++) {
        var flag = n % 111 ? false: true;
        add_digit(10 * n, flag, len - 3);
    }
}
function add_digit(n, flag, len) {
    for (var d = 0; d < 10; n++, d++) {
        var f = (!flag && (n % 1000) % 111 == 0) ? true : flag;
        if (len > 3) add_digit(10 * n, f, len - 1)
        else add_final(100 * n, f);
    }
}
function add_final(n, flag) {
    if (flag) {
        for (var d = 0; d < 100; n++, d++) {
            ++count; // document.write(n + " ");
        }
    }
    else if ((n % 10000) % 1100 == 0) {
        n += (n % 1000) / 10;
        for (var d = 0; d < 10; n++, d++) {
            ++count; // document.write(n + " ");
        }
    }
    else {
        n += ((n % 1000) / 100) * 11;
        ++count; // document.write(n + " ");
    }
}