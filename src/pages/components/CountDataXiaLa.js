import { Cascader, Select } from 'antd';
import React, { Component } from 'react';
import { getDeptList } from '../api/Monitor/ChooseMonitorApi';
/**
 * 树形下拉组件
 * 
 * @author wuzhi
 * @param onChange
 */
class CountDataXiaLa extends Component {
    state = { pingTai: "1", deptName: "", tree: [], tree2: [], diQu: "", diQuShu: [] } 
    componentDidMount() {
        getDeptList().then(res => {
            if (res.data.code === 200) {
                // 此处需要深拷贝数组
                var options = JSON.parse(JSON.stringify(res.data.data[0].children));
                if (options) {
                    options.forEach(item => {
                        // 第一个树不需要自治区部门的子筛选
                        if (item.label === "自治区部门") {
                            delete item.children;
                        } else {
                            // 非自治区部门
                            item.children.forEach(item => {
                                delete item.children;
                            })
                        }
                    })
                    this.setState({tree: options});
                }
            }
        })
    }
    componentDidUpdate(oldProps, oldState) {
        const { diQu, diQuShu } = this.state;
        if (diQu !== oldState.diQu) {
            if (!diQu) {
                // 删除了地区的选择
                this.setState({tree2: [], deptName: ""});
                this.props.onChange("", "")
                return;
            }
            getDeptList().then(res => {
                if (res.data.code === 200) {
                    // 此处要进行深拷贝数组
                    var init = JSON.parse(JSON.stringify(res.data.data[0].children));
                    var options = [];
                    if (diQu === "自治区部门") {
                        init.forEach(item => {
                            if (item.label === "自治区部门") {
                                options = item.children;
                                options.forEach(item => {
                                    item.value = item.label;
                                })
                            }
                        })
                    } else {
                        init.forEach(item => {
                            if (item.label === diQuShu[0]) {
                                item.children.forEach(item2 => {
                                    if (item2.label === diQu) {
                                        item2.children.value = item2.children.label;
                                        options = item2.children;
                                        options.forEach(item => {
                                            item.value = item.label;
                                        })
                                    }
                                    
                                })
                            }
                        })
                    }
                    this.setState({tree2: options});
                }
            })
        }
    }
    render() { 
        const { pingTai, deptName, tree, diQu, tree2 } = this.state;
        return (
            <>
                <Cascader style={ {width: 130, marginRight: 26} }
                 options={tree} onChange={(value) => {
                    if (value === undefined) {
                        // 删除已选择的
                        this.setState({diQu: "", diQuShu: []})
                    } else {
                        this.setState({diQu: value[value.length - 1], diQuShu: value})   
                    }
                    
                }}
                  placeholder="请选择区域" fieldNames={{label: "label", value: "label", children: "children"}}
                  value={diQu} />
                <Select style={ {width: 130, marginRight: 26} } options={tree2} placeholder="请选择部门" onChange={(value) => {this.setState({deptName: value}); 
                    this.props.onChange(value, pingTai)}}
                    popupMatchSelectWidth={280}
                    value={deptName ? deptName : undefined} />
                <Select
                style={{
                    width: 130,
                }}
                options={[{label: "网站", value: "1"},{label: "自媒体", value: "2"}]}
                placeholder="请选择平台"
                onChange={(value) => {this.setState({pingTai: value});this.props.onChange(deptName, value)}}
                />
            </>
        );
    }
}
 
export default CountDataXiaLa;