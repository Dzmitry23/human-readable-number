const dg_tn = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
    'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const tw = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
    if (!number) {
        return  'zero';
    }
    number = number.toString();
    if (number.length > 9) {
        return;
    }
    let num = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!num) {
        return;
    }
    let result = '';
    result += (num[1] != 0) ? (dg_tn[num[1]] || tw[num[1][0]] + ' ' + dg_tn[num[1][1]]) + 'crore ' : '';
    result += (num[2] != 0) ? (dg_tn[num[2]] || tw[num[2][0]] + ' ' + dg_tn[num[2][1]]) + 'lakh ' : '';
    result += (num[3] != 0) ? (dg_tn[num[3]] || tw[num[3][0]] + ' ' + dg_tn[num[3][1]]) + 'thousand ' : '';
    result += (num[4] != 0) ? (dg_tn[num[4]] || tw[num[4][0]] + ' ' + dg_tn[num[4][1]]) + 'hundred ' : '';
    result += (num[5] != 0) ? (dg_tn[num[5]] || tw[num[5][0]] + (tw[num[5][0]] ? ' ' : '') + dg_tn[num[5][1]]) : '';
    return result.trim();
}
