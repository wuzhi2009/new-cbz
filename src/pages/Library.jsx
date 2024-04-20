import React, { Component } from 'react';
import XiaLaKuang from './components/XiaLaKuang';
import Search from './components/Search';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { withRouter } from '../utils/withRouter';
import { addWhiteList, addWort, delWhiteList, delWort, exportWhiteList, exportWhiteListMod, exportWhiteOk, exportWort, exportWortMod, exportWortOk, getWhiteList, getWortList, updateWhiteList, updateWort } from './api/Library/LibraryApi';
import LibraryIconItem from './components/LibraryIconItem';
import Pagination from './components/Pagination';
import { Button, Form, Input, message, Modal, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { LoadingOutlined, QuestionCircleTwoTone, InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
const DasTypeStyle = {
    display: 'inline-block',
    backgroundColor: '#838EEF',
    width: 95,
    height: 29,
    textAlign: 'center',
    color: 'white',
    userSelect: 'none',
    lineHeight: 1.8,
    cursor: 'pointer'
};
const options = [{ key: "全部", value: "null" }, { key: "错词", value: 1 }, { key: "敏感词", value: 2 }, { key: "严重错误表述", value: 3 }]
const options2 = [{ key: "", value: "" }];
const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAABgUlEQVQ4ja2UTUtVURSGH/X6iU3EEBwY1SAKEpGGEkRD0VGBE2lS0KhhNGkSQfQP+gPi3EFBFIj1AzTIkYKNQjIlsAap94l9WPdyrl09W/CFxT6sc/az37XOYneohIaAy5yuNeAwvrgKfAAeAh9bdiWoel/dt1r34vsU/eon9bd6t5QnOe0GdoBl4BVwcIJXw+lRKXcBeAtMArNNx+r18DdTPu0MMXjccQ2KSKpX9LOsQeB2xKVwPAAsARO1fE6h9COfAQ+AXmAX2CgZ+wb8TPZvRvnTFSXPR4k/1BfqpNqpTkRuXR0ppikTOqfW1ffqUCn/HzAXOqzuqe/UrlL+Yjtgis6MPj4G+oFHx8Ypjd4icAfYbtmR4XRTXajo95j6ulFJldMx4EoM+GmaAp7GqFVCb8S6mtGmpqqgo7F+P09ob6y75wldAV6eBdiA/o3nnjbvvwLPMziNigqlq68L2AJ+AW9Kh+SqD3gC/AHGi00xZ7fULxmXdDsdqJ/VawVL+QcW4xlgvYBkQQAAAABJRU5ErkJggg==";
const icon2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABYUlEQVQ4jdXUv0tVYRzH8deVm9J0N4OMwEC0CMKGlv6EG+kSjeKkaQrVn2CDCS2JewU5iBJBUISTKA6Cgji1iIoi6CBJREUUD3zPIufca9fJDxw45/t9nvf313meUnXsCCr4gV+KtYWrBd59vMJEGZdjcQmbmMc7LJ7YNIpLBcDbGMPFBNxDFR24iXsYDPAwvsamDzWyT/qLgab4+IIpPIqyHuIaVtBbB5RpHa1NOY4UaQbdWMAs7p8SKg+Y6Vtk9wlvceWswKQ/6MdPTIatFD1vbgSYdIjn6MF19OFjDDAXmEUs5/g/4wXe4zse42X0dbUI2BkR7+T4lzCCNfzGUNhHispJwAs1yk8/a1cErITtaZyMQmA9bcdgbkVr3tRan9e3Im3EU1OnyfC/dD6AR/HefkZWG47TUHawjPEIsNsA7AaeYDqb8oO4YV43mF26oebwLAOmrO5G2i0NAI9xAP8AVINCQA8CXTIAAAAASUVORK5CYII=";
const icon3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAABL0lEQVQ4ja3UvyvFURjH8de9bgYpKaVkMCozo5RdGVw2kwmLxWA1IANlUdSVJH8AC5mMRpPIIkokMkh+derc2+3e77193XzqqXM+9by/z/ec5zmZ/MoL9GMNA8hJp2ssoiAmdeIYpxjFe0rQELbxgKMAGsMb8vhMCQk6QQ+mAiiLLtz8EVLUBTrCOoAyDQCqlE3wdvBTJ+6TQEk3tIDdOh9/TAu6jfEnJYG60VvhfeMcr7XgSaBVjCf4s9io8J5jJB72RLzJyqiEBG1ipBYojQqxGUtqFDSJvv8AVSntpDdjGS1l3kw8n9Ck67mUMxYqb0VbmRf27fhCUwBdYToOX2LXxqclTHlRoYolHBaNANrHHM6wh4+yhCdspfn3AAqJg5jHcCy5qLsaoANclnb4BfAKPQupJlRgAAAAAElFTkSuQmCC";
/**
 * 词库页面
 * 
 * @author wuzhi
 */
class Library extends Component {
    formRef = React.createRef();
    state = { data: [], con: "", level: "", errSay: "", wort: "", page: 1, pageSize: 10, key: 1, total: 0, data2: [], open: false, loading: false, form: {}, delId: "", open2: false, tiShi: "", open3: false, fileIds:[] }
    componentDidMount() {
        const { pathname } = this.props.router.location;
        if (pathname === '/library/zwei') {
            this.whiteList();
            this.setState({ key: 2 });
        } else {
            this.wortList();
        }
    }
    componentDidUpdate(oldProps, oldState) {
        const { pathname } = this.props.router.location;
        const { searchValue, form, delId } = this.props;
        const searchValue2 = oldProps.searchValue;
        if (JSON.stringify(form) !== "{}" && JSON.stringify(oldProps.form) !== JSON.stringify(form)) {
            // 修改表单
            this.setState({ open: true, form }, () => { this.formRef.current.setFieldsValue(form); });
        } else if (delId && delId !== oldProps.delId) {
            // 删除某个词
            this.setState({ delId, open2: true, tiShi: "是否删除该数据" });
        } else if (searchValue && searchValue !== searchValue2) {
            var s = searchValue;
            if (s === "空的里边是空的wuzhi") {
                // 空的标识
                s = "";
            }

            this.setState({ con: s }, () => { this.onPropChange(pathname) });
        }
    }
    onPropChange = (path) => {
        const { con, data, page, pageSize, data2, level } = this.state;
        // 发送到表的信息
        var info = {};

        // 根据props变化执行的操作
        if (path === '/library/zwei') {
            // 先发送等待信息
            this.props.sendAction({ type: "getWhiteList", data: data2, wait: true, page, pageSize });
            getWhiteList(page, pageSize, level, con).then(res => {
                if (res.data.code === 200) {
                    var data = res.data.data;
                    info = { type: "getWhiteList", data: data, wait: false, page, pageSize };
                    this.props.sendAction(info);
                    this.setState({ total: res.data.total, data2: res.data.data });
                }
            })
        } else {
            // 先发送等待信息
            this.props.sendAction({ type: "getWortList", data: data, wait: true, page, pageSize });
            getWortList(page, pageSize, level, con).then(res => {
                if (res.data.code === 200) {
                    var data = res.data.data;
                    info = { type: "getWortList", data: data, wait: false, page, pageSize };
                    this.props.sendAction(info);
                    this.setState({ total: res.data.total, data });
                }
            })
        }
    }
    go = (path) => {
        const { navigate } = this.props.router;
        if (path === "/library/eins") {
            this.setState({ key: 1, form: {} });
            this.wortList();
        } else {
            this.setState({ key: 2, form: {} });
            this.whiteList();
        }
        navigate(path);
    }
    wortList = () => {
        const { level, con, page, pageSize } = this.state;
        // 发送到表的信息
        var info = {};
        // 先发送等待信息
        this.props.sendAction({ type: "getWortList", data: [], wait: true, page: 1, pageSize });
        getWortList(page, pageSize, level, con).then(res => {
            if (res.data.code === 200) {
                var data = res.data.data;
                info = { type: "getWortList", data, wait: false, page: 1, pageSize };
                this.props.sendAction(info);
                this.setState({ total: res.data.total, data, page: 1 });
            }
        })
    }
    whiteList = () => {
        const { level, con, page, pageSize } = this.state;
        // 发送到表的信息
        var info = {};
        // 先发送等待信息
        this.props.sendAction({ type: "getWhiteList", data: [], wait: true });
        getWhiteList(page, pageSize, level, con).then(res => {
            if (res.data.code === 200) {
                var data = res.data.data;
                info = { type: "getWhiteList", data, wait: false, page: 1, pageSize };
                this.props.sendAction(info);
                this.setState({ total: res.data.total, data2: data, page: 1 });
            }
        })
    }
    addOk = () => {
        const { form } = this.state;
        const { pathname } = this.props.router.location;
        this.setState({ loading: true });
        if (pathname === '/library/eins') {
            if (form.id) {
                // id存在说明是修改
                updateWort(form).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.msg);
                        // 刷新页面重新获取数据发送给表
                        this.setState({page: 1}, () => {this.onPropChange(pathname)});
                        this.setState({ open: false, loading: false, form: {} });
                    } else {
                        this.setState({ loading: false });
                    }
                })
            } else {
                // 不存在说明是新增
                addWort(form).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.msg);
                        this.setState({page: 1}, () => {this.onPropChange(pathname)});
                        this.setState({ open: false, loading: false, form: {} });
                    } else {
                        this.setState({ loading: false })
                    }
                })
            }
        } else {
            if (form.id) {
                // id存在说明是修改
                updateWhiteList(form).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.msg);
                        // 刷新页面重新获取数据发送给表
                        this.setState({page: 1}, () => {this.onPropChange(pathname)});
                        this.setState({ open: false, loading: false, form: {} });
                    } else {
                        this.setState({ loading: false });
                    }
                })
            } else {
                addWhiteList(form).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.msg);
                        this.setState({page: 1}, () => {this.onPropChange(pathname)});
                        this.setState({ open: false, loading: false, form: {} });
                    } else {
                        this.setState({ loading: false });
                    }
                })
            }
        }
    }
    // 删除
    okDel = (id) => {
        const { pathname } = this.props.router.location;
        this.setState({ loading: true })
        if (pathname === "/library/eins") {
            // 词库删除
            delWort(id).then(res => {
                if (res.data.code === 200) {
                    message.success(res.data.msg);
                    this.onPropChange(pathname);
                    this.setState({ open2: false, loading: false, page: 1, delId: "" })
                } else {
                    this.setState({ loading: false });
                }
            })
        } else {
            // 白名单删除
            delWhiteList(id).then(res => {
                if (res.data.code === 200) {
                    message.success(res.data.msg);
                    this.setState({page: 1}, () => {this.onPropChange(pathname)})
                    this.setState({ open2: false, loading: false, delId: "" })
                } else {
                    this.setState({ loading: false });
                }
            })
        }
    }
    // 导出
    okExport = () => {
        const { pathname } = this.props.router.location;
        this.setState({loading: true});
        if (pathname === '/library/eins') {
            // 词库导出
            exportWort().then(res => {
                const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
                const blobURL = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = blobURL;
                a.download = "词库.xlsx";
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                a.parentNode.removeChild(a);
                window.URL.revokeObjectURL(blobURL);
                this.setState({open2: false, loading: false});
            }) 
        } else {
            // 白名单导出
            exportWhiteList().then(res => {
                const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
                const blobURL = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = blobURL;
                a.download = "白名单.xlsx";
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                a.parentNode.removeChild(a);
                window.URL.revokeObjectURL(blobURL);
                this.setState({open2: false, loading: false});
            }) 
        }
        
    }
    render() {
        const { key, page, total, open, loading, form, open2, tiShi, open3, fileIds } = this.state;
        const { pathname } = this.props.router.location;
        var spanStyle = { ...DasTypeStyle, backgroundColor: '#EDEDED', color: 'black' };
        var _this = this;
        // 文件上传
        const props = {
            name: 'file',
            multiple: true,
            action: pathname === '' ? '/sp/wort/importWort' : '/sp/wort/importWhiteList',
            onChange(info) {
              const { status } = info.file;
              if (status !== 'uploading') {
                _this.setState({fileIds: info.fileList});
              }
              if (status === 'done') {
                message.success(`${info.file.name} 加载成功！！`);
              } else if (status === 'error') {
                message.error(`${info.file.name} 加载失败！！`);
              }
            },
            // onDrop(e) {
            //   console.log('Dropped files', e.dataTransfer.files);
            // },
            // onRemove(file) {
            //     console.log('object :>> ', file.uid);
            // }, 
            withCredentials: true,
            headers: {Authorization: "Bearer 60ce6582-5290-4ecc-b32c-0ad0f83ffbc8"}
        }
        return (
            <div style={{ margin: 18, marginTop: 110 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 4, minWidth: 190 }}><span style={key === 1 ? DasTypeStyle : spanStyle} onClick={() => { if (key !== 1) { this.go("/library/eins") } }}>词库</span>
                        <span style={key === 2 ? DasTypeStyle : spanStyle} onClick={() => { if (key !== 2) { this.go("/library/zwei") } }}>白名单</span>
                    </div>
                    <div style={{ flex: 4 }}><XiaLaKuang options={options} change={(level) => {
                        const { pathname } = this.props.router.location;
                        if (level !== "null") {
                            level = parseInt(level);
                        } else {
                            level = "";
                        }
                        this.setState({ level }, () => { this.onPropChange(pathname) })
                    }} /></div>
                    <div style={{ flex: 4 }}><Search options={options2} haben={false} /></div>
                    <div style={{ flex: 2, minWidth: 300 }}>
                        <span style={{
                            background: 'rgb(75, 131, 240)', color: 'white',
                            display: 'inline-block', padding: '2px 10px 3px',
                            borderRadius: 5, marginLeft: 10, cursor: 'pointer', height: 25, lineHeight: 1.5
                        }} onClick={() => { this.setState({ open2: true, tiShi: "确认导出文件" }) }}>
                            <img alt='' src={icon} style={{ marginRight: 18, width: 16, position: 'relative', top: 1 }} />导出
                        </span>
                        <LibraryIconItem icon={icon2} title="导入" onClick={() => { this.setState({ open3: true }) }} />
                        <LibraryIconItem icon={icon3} title="添加" onClick={() => { this.setState({ open: true, form: {} }, () => { this.formRef.current.resetFields() }) }} />
                    </div>
                </div>
                <Outlet />
                <Pagination defaultCurrent={page} total={total} onChange={(page, pageSize) => {
                    this.setState({ page, pageSize }, () => {
                        this.onPropChange(pathname);
                    })
                }} />
                <Modal open={open} onCancel={() => {this.props.sendAction({ type: "wortItem", form: {} });this.setState({open: false, loading: false, form: {} })}} title={<div style={{ borderLeft: '5px solid red', paddingLeft: 5, color: '#4B83F0' }}>{pathname === "/library/eins" ? "添加内容" : "添加白名单"}</div>}
                    maskClosable={true} closeIcon={false} centered={true} width={650} style={{ height: 430 }}
                    footer={[
                        <Button key={60600} style={{ marginRight: 40, width: 100, backgroundColor: '#ECF2F8' }} onClick={() => {
                            this.setState({ open: false, loading: false, form: {} });
                            // 为了能够再次点击打开
                            this.props.sendAction({ type: "wortItem", form: {} });
                        }}>取消</Button>,
                        !loading ? <Button key={88888} type='primary' style={{ marginRight: 180, width: 100 }} onClick={() => {
                            this.addOk();
                        }}>确定</Button> : <Button key={88888} type='primary' style={{ marginRight: 180, width: 100, backgroundColor: '#4096FF' }}><LoadingOutlined style={{ marginRight: 5 }} />确定</Button>
                    ]}>
                    <Form style={{ minHeight: 300, padding: '10px 10px' }} colon={false} onValuesChange={(a, b) => {
                        this.setState({ form: { ...form, ...b } })
                    }} ref={this.formRef}>
                        <Form.Item label={<div style={{ fontSize: 16, width: 120 }}>选择类型</div>} style={{ width: 560 }} name="level">
                            <Select placeholder={<div style={{ fontSize: 16 }}>请选择错误类型</div>}>
                                <Select.Option value={1}><span style={{ fontSize: 16 }}>错词</span></Select.Option>
                                <Select.Option value={2}><span style={{ fontSize: 16 }}>敏感词</span></Select.Option>
                                <Select.Option value={3}><span style={{ fontSize: 16 }}>严重错误表述</span></Select.Option>
                            </Select>
                        </Form.Item>
                        {pathname === "/library/eins" ? <Form.Item label={<div style={{ fontSize: 16, width: 120 }}>输入表述错误</div>} style={{ width: 560 }} name="errSay">
                            <TextArea rows={4} placeholder="请输入表述错误,多个错误表述用逗号分隔." style={{ fontSize: 16, minHeight: 160 }} />
                        </Form.Item> : <></>}
                        <Form.Item name="wort" label={pathname === "/library/eins" ? <div style={{ fontSize: 16, width: 120 }}>输入正确表述</div> : <div style={{ fontSize: 16, width: 120 }}>输入词汇</div>} style={{ width: 560 }}>
                            <Input placeholder={pathname === "/library/eins" ? "请输入正确表述" : "请输入词汇"} style={{ fontSize: 16 }} />
                        </Form.Item>
                        <Form.Item hidden={true} name="id">
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
                {/* 是否导出和删除 */}
                <Modal onCancel={() => {this.props.sendAction({ type: "delWort", delId: "" });this.setState({open2: false, loading: false, delId: "" })}} open={open2} width={416} title={<div><QuestionCircleTwoTone twoToneColor="#FBC14F" style={{ margin: 15, fontSize: 24 }} />提示</div>} footer={[
                    <Button key={60700} style={{ marginRight: 5, width: 100, backgroundColor: '#ECF2F8' }} onClick={() => {
                        this.setState({ open2: false, loading: false, delId: "" });
                        // 为了能够再次点击打开
                        this.props.sendAction({ type: "delWort", delId: "" });
                    }}>取消</Button>,
                    !loading ? <Button key={88887} type='primary' style={{ width: 100 }} onClick={() => {
                        // 判断是导出还是删除
                        const { delId } = this.state;
                        if (delId) {
                            // 非空 说明是删除
                            this.okDel(delId);
                        } else {
                            // 空的 说明是导出
                            this.okExport();
                        }
                    }}>确定</Button> : <Button key={88887} type='primary' style={{ width: 100, backgroundColor: '#4096FF' }}><LoadingOutlined style={{ marginRight: 5 }} />确定</Button>
                ]}>
                    <span style={{ fontSize: 18, position: 'absolute', left: 77, top: 70 }}>{tiShi}</span>
                    <div style={{ minHeight: 50, maxHeight: 50 }} />
                </Modal>
                {/* 导入 */}
                <Modal open={open3} width={600} title={<div style={{ borderLeft: '5px solid red', paddingLeft: 5, color: '#4B83F0', fontWeight: 800, fontSize: 18 }}>数据导入</div>} footer={[<Button key={33333} onClick={() => {
                    this.setState({open3: false, fileIds: []})
                }}>取 消</Button>]} maskClosable={true} centered={true} onCancel={() => {this.setState({open3: false, fileIds: []})}}>
                    <div style={ {borderBottom: '1px solid #E8E8E8', borderTop: '1px solid #E8E8E8', padding: '30px 5px'} }>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">将文件拖拽到此处，或点击上传</p>
                        <p className="ant-upload-hint">
                            上传文件格式要求
                        </p>
                    </Dragger>
                    <span style={ {cursor: 'pointer'} } onClick={() => {
                        if (pathname === "/library/eins") {
                            // 词库模板导出
                            exportWortMod();
                        } else {
                            // 白名单模板导出
                            exportWhiteListMod();
                        }
                    }}> <span style={ {color: 'red', lineHeight: 2, fontSize: 22} }>*</span> 下载表单模板</span>
                    <span className='YellowButton' style={ {backgroundColor: '#5B8EF1', display: 'block', margin: "10px auto"} } onClick={() => {
                        if (loading) {
                            // 在加载中
                            return;
                        }
                        var ids = [];
                        fileIds.map((item) => {
                            if (item.response.code === 200) {
                                return ids.push(item.response.data);
                            } else {
                                return null;
                            }
                        })
                        if (ids.length <= 0) {
                            return message.warning("请您先上传文件！！");
                        }
                        this.setState({loading: true});
                        if (pathname === "/library/eins") {
                            // 词库导入
                            exportWortOk(ids).then(res => {
                                if (res.data.code === 200) {
                                    message.success(res.data.msg);
                                    this.setState({page: 1}, () => {this.onPropChange(pathname)});
                                    this.setState({ open3: false, loading: false, fileIds: [] });
                                } else {
                                    this.setState({loading: false});
                                }
                            })
                        } else {
                            // 白名单导入
                            exportWhiteOk(ids).then(res => {
                                if (res.data.code === 200) {
                                    message.success(res.data.msg);
                                    this.setState({page: 1}, () => {this.onPropChange(pathname)});
                                    this.setState({ open3: false, loading: false, fileIds: [] });
                                } else {
                                    this.setState({loading: false});
                                }
                            })
                        }
                    }}>{loading ? <LoadingOutlined style={{ marginRight: 5 }} /> : <></>}<span>点击上传</span></span>
                    </div>
                </Modal>
            </div>
        );
    }
}

//发送list数据
const setListData = (dispatch) => {
    return {
        sendAction: (info) => {
            dispatch(info)
        }
    }
}
export default withRouter(connect(({ search, wortItem, delWort }) => { return { ...search, ...wortItem, ...delWort } }, setListData)(Library));