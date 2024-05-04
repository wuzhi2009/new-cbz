import { Dropdown, Empty, Spin } from 'antd';
import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { getDeptList } from '../api/Monitor/ChooseMonitorApi';
const tableKopf = ["不规范表述", "规范表述", "操作"]
/**
 * 管理员表格
 * 
 * @author wuzhi
 * @param data
 * @param changeIds([])选中的id数组
 * @param page 第几页
 * @param pageSize 每页几条数据
 * @param wait 是否加载中
 * @param onChange(siteName, pingTai)
 */
class AdminTable extends Component {
    state = { page: 1, pageSize: 10, ids:[], quanXuan: false, menuItems: [], open: false, siteName: "", pingTai: "", open2: false } 
    xuanAll = (e) => {
        const { ids } = this.state;
        var mdIds = ids;
        if (e.target.checked) {
            // 选中全部
            this.props.data.map(item => {
                var index = mdIds.indexOf(item.id);
                if (index === -1) {
                    // 当且仅当没选取
                    return mdIds.push(item.id);
                }
                return null;
            })
        } else {
            // 取消全选 如果是第一页和第二页都全选了 只取消其中一页的全选
            this.props.data.forEach(item => {
                var index = mdIds.indexOf(item.id);
                if (index !== -1) {
                   mdIds.splice(index, 1);
                }
            })
        }
        this.props.changeIds(mdIds);
        this.setState({quanXuan: e.target.checked, ids:mdIds});
    }
    xuanZhe = (e, DasMdId) => {
        const { ids } = this.state;
        const { data } = this.props;
        var q = true;
        if (e.target.checked) {
            // 选取 // 当元素是该页最后一个被选取的时候 同时选取表头的选项
            try {
                data.forEach(item => {
                    if (item.id !== DasMdId && !ids.includes(item.id)) {
                        // 所选择的mdId中 没有包含现在数据的id
                        // 停止forEach
                        throw new Error("stop");
                    } else {
                        // 有存在的元素 继续下一个判断
                        q = true;
                    }
                }) 
            } catch (error) {
                if (error.message !== "stop") {
                    throw error;
                }
                q = false;
            }
            this.setState({ids:[...ids, DasMdId], quanXuan: q});
            this.props.changeIds([...ids, DasMdId]);
        } else {
            // 取消选取
            var index = ids.indexOf(DasMdId);
            if (index !== -1) {
                ids.splice(index, 1);
            }
            this.setState({ids, quanXuan: false});
            this.props.changeIds(ids);
        }
    }
    componentDidUpdate(oldProps) {
        const { ids } = this.state;
        const { page, pageSize, data } = this.props;
        if (page !== oldProps.page || pageSize !== oldProps.pageSize) {
            this.setState({page, pageSize, wait: false});
        } 
        if (data.length > 0 && data !== oldProps.data) {
            var q = true;
            // 切换数据判断是否全选
            try {
                data.forEach(item => {
                    if (!ids.includes(item.id)) {
                        // 所选择的mdId中 没有包含现在数据的id
                        // 停止forEach
                        throw new Error("stop");
                    } else {
                        // 有存在的元素 继续下一个判断
                        q = true;
                    }
                }) 
            } catch (error) {
                if (error.message !== "stop") {
                    throw error;
                }
                q = false;
            }
            this.setState({quanXuan: q});
        }
    }
    componentDidMount() {
        this.initTree();
    }
    // 平台下拉框的树形结构
    initTree = () => {
        getDeptList().then(res => {
            if (res.data.code === 200) {
                var tree = JSON.parse(JSON.stringify(res.data.data));
                var pingTaiTree = [];
                // 将原来的树构造为SubMenuType
                tree[0].children.forEach(item => {
                    item.type = 'sub';
                    item.popupClassName = 'adminPingTai';
                    item.popupOffset = [-55, 0];
                    item.key = item.label
                    if (item.label === "自治区部门") {
                        item.children.forEach(item2 => {
                            item2.key = item2.label;
                            // 删掉所有子类的子类
                            item2.children = undefined;
                        })
                    } else {
                        var dasChildren = [];
                        // 非自治区部门 取子类的子类
                        item.children.forEach(item2 => {
                            item2.key = item2.label;
                            // 删掉所有子类的子类的子类
                            item2.children.forEach(item3 => {
                                item3.key = item3.label;
                                item3.children = undefined;
                            })
                            dasChildren.push(...item2.children);
                        })
                        item.children = dasChildren;
                    }
                    pingTaiTree.push(item)
                })
                const menuItems = pingTaiTree;
                this.setState({menuItems})
            }
        })
    }
    render() { 
        const { page, pageSize, quanXuan, ids, menuItems, open, siteName, pingTai, open2 } = this.state;
        const { data, wait } = this.props;
        return (
            <Spin spinning={wait}>
            <table style={ {margin: '20px 25px', borderSpacing: '0 0px', width: '99%'} }>
                <colgroup>
                    <col style={ {width: 50,minWidth: 50,textAlign: 'center', minHeight: 70} }/>
                    <col style={ {width: 60,minWidth: 60, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 130,minWidth: 130, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 140,minWidth: 140, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 100,minWidth: 100, textAlign: 'center', minHeight: 70} }  />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 190,minWidth: 190, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 190,minWidth: 190, textAlign: 'center', minHeight: 70} } />
                    <col style={ {width: 120,minWidth: 120, textAlign: 'center', minHeight: 70} } />
                </colgroup>
                <thead>
                    
                    <tr>
                        <th style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399'} }>
                            <input type='checkbox' style={ {width: 15, height: 15} } onChange={(e) => {this.xuanAll(e)}} checked={quanXuan} />
                        </th>
                        <th style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399', userSelect: 'none'} }>序号</th>
                        <th style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399', userSelect: 'none'} }>
                        <Dropdown
                            menu={ {items: menuItems, onClick: (item) => {this.setState({siteName: item.key, open: false, open2: false}); this.props.onChange(item.key, pingTai)}} }
                            trigger={['click']}
                            open={open}
                        >
                            <div>单位<DownOutlined style={ {cursor: 'pointer'} } onClick={() => {this.setState({open: !open})}} /></div>
                        </Dropdown>
                        </th>
                        <th style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399', userSelect: 'none'} }>站点/账号名称</th>
                        <th style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399', userSelect: 'none'} }>
                        <Dropdown
                            menu={ {items: [{key: 1, label: "网站"},{key: 2, label: "新媒体"}], onClick: (item) => {this.setState({pingTai: item.key, open2: false, open: false}); this.props.onChange(siteName, item.key)}} }
                            trigger={['click']}
                            open={open2}
                        >
                            <div>平台<DownOutlined style={ {cursor: 'pointer'} } onClick={() => {this.setState({open2: !open2})}} /></div>
                        </Dropdown>
                        </th>
                        {tableKopf.map((item, key) => {
                            return (
                                <th key={key} style={ {backgroundColor: '#ECF2F8', height: 40, border: '1px solid #8F9399', userSelect: 'none'} }>{item}</th>
                            )
                        })}
                    </tr>
                        {data.map((item, key) => {
                            const { amendments, errorPlatform } = item;
                            var newAmendments = JSON.parse(amendments);
                            var newMediaType = "";
                            switch (errorPlatform) {
                                case "1":
                                    newMediaType = "网站";
                                    break;
                                case "2":
                                    newMediaType = "手机app";
                                    break;
                                case "3":
                                    newMediaType = "微信";
                                    break;
                                case "4":
                                    newMediaType = "微博";
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <tr key={key} style={ ids.includes(item.id) ? {background: '#F0FAFF', maxHeight: 40} : {maxHeight: 40}} onClick={() => {this.setState({open: false, open2: false})}}>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }><input type='checkbox' style={ {width: 15, height: 15} } onChange={(e) => {this.xuanZhe(e, item.id)}} checked={ids.includes(item.id)} /></td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{(key + 1) + ((page - 1) * pageSize)}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.deptName}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{item.siteName}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newMediaType}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399', color: 'red'} }>{item.errorDescription}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>{newAmendments[0]}</td>
                                    <td style={ {textAlign: 'center', border: '1px solid #8F9399'} }>
                                        <div className='YellowButton' style={ {background: '#61A3FF', color: 'white'} } ><span>提醒</span></div>
                                    </td>
                                </tr>
                            )
                        })}
                </thead>
            </table>
            {data.length === 0 ?
                    <Empty image={<div style={ {lineHeight: 13} }>{Empty.PRESENTED_IMAGE_SIMPLE}</div>} style={ {backgroundColor: '#FFFFFF', height: 168, margin: '10px 24px'} } />: <></>
                }
            </Spin>
        );
    }
}
 
export default AdminTable;