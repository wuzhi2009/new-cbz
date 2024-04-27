import { solarToLunar } from 'chinese-lunar';
import React, { Component } from 'react';
// 星期转换
const getToday = (today) => {
    switch (today) {
        case 0:
            return "星期日";
        case 1:
            return "星期一";
        case 2:
            return "星期二";
        case 3:
            return "星期三";
        case 4:
            return "星期四";
        case 5:
            return "星期五";
        case 6:
            return "星期六";
        default:
            break
      }
}
// 阿拉伯数字转中文
const numberGoChinese = (num) => {
    num = Number(num);
    var upperCaseNumber = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万", "亿"];
    var length = String(num).length;
    if (length === 1) {
      return upperCaseNumber[num];
    } else if (length === 2) {
      if (num === 10) {
        return upperCaseNumber[num];
      } else if (num > 10 && num < 20) {
        return "十" + upperCaseNumber[String(num).charAt(1)];
      } else {
        return upperCaseNumber[String(num).charAt(0)] + "十" + upperCaseNumber[String(num).charAt(1)].replace("零", "");
      }
}
}
/**
 * 现在时间组件
 * 
 * @author wuzhi
 * @param now 现在时间
 */
class CountDataTime extends Component {
    state = {  } 
    render() { 
        const { now } = this.props;
        var time = new Date(now);
        // 星期几
        var xqj = getToday(time.getDay());
        var nl = solarToLunar(time);
        // 农历几月
        var nongLiMonth = nl.month;
        // 农历几号
        var nongLiDay = nl.day - 1;
        if (nongLiMonth === 1) {
            nongLiMonth = "正";
        } else {
            nongLiMonth = numberGoChinese(nongLiMonth);
        }
        if (nongLiDay <= 9) {
            nongLiDay = "初" + numberGoChinese(nongLiDay);
        } else if (nongLiDay > 20 && nongLiDay < 30) {
            nongLiDay = "廿" + numberGoChinese(nongLiDay).substring(2);
        } else {
            nongLiDay = numberGoChinese(nongLiDay);
        }
        return (
            <>
                <div style={ {color: '#868FF0', fontSize: 36, fontWeight: 'bold', marginBottom: 50, userSelect: 'none'} }>{now}</div>
                <div  style={ {color:'#595959', marginLeft: 3, fontSize: 18, transform: 'translateY(-25px)'} }>农历{nongLiMonth}月{nongLiDay}<span style={ {marginLeft: 25} }>{xqj}</span></div>
            </>
        );
    }
}
 
export default CountDataTime;