import React, { Component } from 'react';
import Img from '../../imgs/018今日检测次数图标.ef4a76b9.png';
import Img2 from '../../imgs/019今日检测字数图标.bfaf9e5a.png';
/**
 * 今日检测数据组件
 * 
 * @author wuzhi
 * @param ciShu 今日检测次数
 * @param ziShu 今日检测字数
 */
class CountDataTag extends Component {
    state = {  } 
    render() { 
        const {ciShu, ziShu} = this.props;
        return (
            <>
                <span style={ {position: 'relative'} }><img alt="" src={Img} style={ {marginRight: 15} }  /><span style={ {position: 'absolute', left: 60, color: 'white', top: -35} }>今日检测次数</span><span style={ {position: 'absolute', left: 60, color: 'white', top: -10} }>{ciShu}</span></span>
                <span style={ {position: 'relative'} }><img alt="" src={Img2} /><span style={ {marginRight: 15} }  /><span style={ {position: 'absolute', left: 60, color: 'white', top: -35} }>今日检测字数</span><span style={ {position: 'absolute', left: 60, color: 'white', top: -10} }>{ziShu}</span></span>
            </>
        );
    }
}
 
export default CountDataTag;