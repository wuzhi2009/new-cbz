import React, { Component } from 'react';
import MonitorItem from './components/MonitorItem';
const data = [
            {
                "id": 18087,
                "label": "自治区部门",
                "ancestor": null,
                "children": [
                    {
                        "id": 18201,
                        "label": "自治区人民政府办公厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18200,
                        "label": "自治区发展改革委",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18198,
                        "label": "自治区教育厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18199,
                                "label": "自治区招生考试院",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18197,
                        "label": "自治区科技厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18196,
                        "label": "自治区工业和信息化厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18195,
                        "label": "自治区民宗委",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18192,
                        "label": "自治区公安厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18194,
                                "label": "自治区公安厅宣传处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18193,
                                "label": "自治区公安厅政治部宣传处",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18191,
                        "label": "自治区民政厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18190,
                        "label": "自治区司法厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18189,
                        "label": "自治区财政厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18187,
                        "label": "自治区人力资源社会保障厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18188,
                                "label": "自治区人力资源和社会保障信息中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18185,
                        "label": "自治区自然资源厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18186,
                                "label": "自治区自然资源厅信息中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18184,
                        "label": "自治区生态环境厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18183,
                        "label": "自治区住房城乡建设厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18162,
                        "label": "自治区交通运输厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18182,
                                "label": "广西壮族自治区港航发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18181,
                                "label": "自治区柳州船舶检验中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18180,
                                "label": "自治区南宁航道养护中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18179,
                                "label": "自治区梧州航道养护中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18178,
                                "label": "自治区公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18177,
                                "label": "自治区沿海公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18176,
                                "label": "自治区港航发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18175,
                                "label": "自治区道路运输发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18174,
                                "label": "自治区交通运输综合行政执法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18173,
                                "label": "贵港公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18172,
                                "label": "河池公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18171,
                                "label": "桂西公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18170,
                                "label": "桂中公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18169,
                                "label": "桂林公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18168,
                                "label": "桂东公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18167,
                                "label": "玉林公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18166,
                                "label": "百色公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18165,
                                "label": "自治区高速公路发展中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18164,
                                "label": "自治区高速公路发展中心南宁分中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18163,
                                "label": "自治区高速公路发展中心桂林分中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18161,
                        "label": "自治区水利厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18160,
                        "label": "自治区农业农村厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18158,
                        "label": "自治区商务厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18159,
                                "label": "中国[广西]自由贸易试验区",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18157,
                        "label": "自治区文化和旅游厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18155,
                        "label": "自治区卫生健康委",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18156,
                                "label": "自治区卫生监督所",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18153,
                        "label": "自治区退役军人厅",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18154,
                                "label": "自治区军队离退休干部安置服务中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18152,
                        "label": "自治区应急厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18151,
                        "label": "自治区审计厅",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18150,
                        "label": "自治区外事办",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18149,
                        "label": "自治区国资委",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18148,
                        "label": "自治区市场监管局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18147,
                        "label": "自治区广电局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18146,
                        "label": "自治区体育局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18145,
                        "label": "自治区统计局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18143,
                        "label": "自治区林业局",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18144,
                                "label": "广西林业信息宣传中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18142,
                        "label": "自治区地方金融监管局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18141,
                        "label": "自治区国防动员办",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18140,
                        "label": "自治区乡村振兴局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18139,
                        "label": "自治区北部湾办",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18136,
                        "label": "自治区大数据发展局",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18138,
                                "label": "自治区信息中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18137,
                                "label": "中国东盟信息港建设办公室",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18132,
                        "label": "自治区机关事务管理局",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18135,
                                "label": "广西区直住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18134,
                                "label": "南宁住房公积金管理中心区直分中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18133,
                                "label": "广西展览馆",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18130,
                        "label": "自治区医保局",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18131,
                                "label": "自治区卫生监督所",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18129,
                        "label": "自治区粮食和储备局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18108,
                        "label": "自治区监狱管理局",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18128,
                                "label": "自治区新康监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18127,
                                "label": "自治区北海监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18126,
                                "label": "自治区桂中监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18125,
                                "label": "自治区宜州监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18124,
                                "label": "自治区女子监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18123,
                                "label": "自治区桂林监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18122,
                                "label": "自治区柳城监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18121,
                                "label": "自治区梧州监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18120,
                                "label": "自治区南宁监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18119,
                                "label": "自治区未成年犯管教所[邕州监狱]",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18118,
                                "label": "自治区贵港监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18117,
                                "label": "自治区钟山监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18116,
                                "label": "自治区西江监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18115,
                                "label": "自治区黎塘监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18114,
                                "label": "自治区警官学校",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18113,
                                "label": "自治区英山监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18112,
                                "label": "自治区中渡监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18111,
                                "label": "自治区柳州监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18110,
                                "label": "自治区鹿州监狱",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18109,
                                "label": "自治区钦州监狱",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18107,
                        "label": "自治区海洋局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18106,
                        "label": "自治区中医药局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18105,
                        "label": "自治区药监局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18104,
                        "label": "自治区投资促进局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18103,
                        "label": "广西博览局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18102,
                        "label": "自治区地矿局",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18101,
                        "label": "自治区公共资源交易中心",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18100,
                        "label": "自治区农机中心",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18099,
                        "label": "中国[广西]自由贸易试验区建设指挥部办公室",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18094,
                        "label": "钦州港片区管委会",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 18098,
                                "label": "钦州市公安局港区分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18097,
                                "label": "中马钦州产业园区管委会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18096,
                                "label": "钦州市钦州港区社保局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18095,
                                "label": "钦州市钦州港经济技术开发区人力资源培训就业服务中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 18093,
                        "label": "凭祥综合保税区管委会",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18092,
                        "label": "中马钦州产业园区管委会",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18091,
                        "label": "东兴试验区管委会",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18090,
                        "label": "南宁五象新区管委会",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18089,
                        "label": "自治区供销社",
                        "ancestor": null,
                        "users": null
                    },
                    {
                        "id": 18088,
                        "label": "自治区糖业发展办公室",
                        "ancestor": null,
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 17218,
                "label": "梧州市",
                "ancestor": null,
                "children": [
                    {
                        "id": 17366,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17405,
                                "label": "梧州市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17404,
                                "label": "梧州市发展和改革委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17403,
                                "label": "梧州市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17402,
                                "label": "梧州市科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17401,
                                "label": "梧州市工业和信息化局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17400,
                                "label": "梧州市民族宗教事务委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17397,
                                "label": "梧州市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17399,
                                        "label": "梧州市公安局网络安全保卫支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17398,
                                        "label": "梧州市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17396,
                                "label": "梧州市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17395,
                                "label": "梧州市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17394,
                                "label": "梧州市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17393,
                                "label": "梧州市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17392,
                                "label": "梧州市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17391,
                                "label": "梧州市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17390,
                                "label": "梧州市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17389,
                                "label": "梧州市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17388,
                                "label": "梧州市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17387,
                                "label": "梧州市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17386,
                                "label": "梧州市退役军人事务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17385,
                                "label": "梧州市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17384,
                                "label": "梧州市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17383,
                                "label": "梧州市商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17382,
                                "label": "梧州市审计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17381,
                                "label": "梧州市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17380,
                                "label": "梧州市卫生健康委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17379,
                                "label": "梧州市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17378,
                                "label": "梧州市乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17377,
                                "label": "梧州市医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17376,
                                "label": "梧州市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17375,
                                "label": "梧州市城市管理监督局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17374,
                                "label": "梧州市行政审批局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17373,
                                "label": "梧州市金融工作办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17372,
                                "label": "梧州市人民政府国有资产监督管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17371,
                                "label": "梧州市投资促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17370,
                                "label": "粤桂合作特别试验区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17369,
                                "label": "梧州市供销合作社联合社",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17368,
                                "label": "梧州市城镇集体工业联社",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17367,
                                "label": "梧州市社会保险事业管理中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17347,
                        "label": "万秀区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17365,
                                "label": "梧州市万秀区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17364,
                                "label": "梧州市万秀区教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17363,
                                "label": "梧州市公安局万秀区分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17362,
                                "label": "梧州市万秀区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17361,
                                "label": "梧州市万秀区人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17360,
                                "label": "梧州市万秀区建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17359,
                                "label": "梧州市万秀区科技文化体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17358,
                                "label": "梧州市万秀区卫生健康局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17357,
                                "label": "梧州市万秀区市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17356,
                                "label": "梧州市万秀区城市管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17355,
                                "label": "梧州市万秀区夏郢镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17354,
                                "label": "梧州市万秀区城东镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17353,
                                "label": "梧州市万秀区角嘴街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17352,
                                "label": "梧州市万秀区龙湖镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17351,
                                "label": "梧州市万秀区人民政府城北街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17350,
                                "label": "梧州市万秀区人民政府富民街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17349,
                                "label": "梧州市万秀区人民政府城南街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17348,
                                "label": "梧州市万秀区人民政府东兴街道办事处",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17331,
                        "label": "长洲区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17346,
                                "label": "梧州市长洲区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17345,
                                "label": "梧州市长洲区发展和改革局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17344,
                                "label": "梧州市长洲区教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17343,
                                "label": "梧州市公安局长洲区分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17342,
                                "label": "梧州市长洲区民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17341,
                                "label": "梧州市长洲区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17340,
                                "label": "梧州市长洲区建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17339,
                                "label": "梧州市长洲区科技文化体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17338,
                                "label": "梧州市长洲区统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17337,
                                "label": "梧州市长洲区市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17336,
                                "label": "梧州市长洲区人民政府大塘街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17335,
                                "label": "梧州市长洲区人民政府兴龙办街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17334,
                                "label": "梧州市长洲区人民政府红岭街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17333,
                                "label": "梧州市长洲区长洲镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17332,
                                "label": "梧州市长洲区倒水镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17317,
                        "label": "龙圩区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17330,
                                "label": "梧州市龙圩区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17329,
                                "label": "梧州市龙圩区教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17328,
                                "label": "梧州市公安局龙圩区分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17327,
                                "label": "梧州市龙圩区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17326,
                                "label": "梧州市龙圩区人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17325,
                                "label": "梧州市龙圩区科技文化和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17324,
                                "label": "梧州市龙圩区卫生健康局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17323,
                                "label": "梧州市龙圩区应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17322,
                                "label": "梧州市龙圩去市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17321,
                                "label": "梧州市龙圩区龙圩镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17320,
                                "label": "梧州市龙圩区大坡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17319,
                                "label": "梧州市龙圩区新地镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17318,
                                "label": "梧州市龙圩区广平镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17301,
                        "label": "苍梧县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17316,
                                "label": "苍梧县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17315,
                                "label": "苍梧县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17314,
                                "label": "苍梧县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17313,
                                "label": "苍梧县人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17312,
                                "label": "苍梧县应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17311,
                                "label": "苍梧县商务和投资促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17310,
                                "label": "苍梧县梨埠镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17309,
                                "label": "苍梧县木双镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17308,
                                "label": "苍梧县旺甫镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17307,
                                "label": "苍梧县京南镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17306,
                                "label": "苍梧县岭脚镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17305,
                                "label": "苍梧县狮寨镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17304,
                                "label": "苍梧县六堡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17303,
                                "label": "苍梧县沙头镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17302,
                                "label": "苍梧县石桥镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17265,
                        "label": "藤县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17300,
                                "label": "藤县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17299,
                                "label": "藤县发展和改革局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17298,
                                "label": "藤县教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17297,
                                "label": "藤县工业和信息化局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17296,
                                "label": "藤县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17295,
                                "label": "藤县民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17294,
                                "label": "藤县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17293,
                                "label": "藤县财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17292,
                                "label": "藤县人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17291,
                                "label": "藤县自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17290,
                                "label": "藤县住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17289,
                                "label": "藤县农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17288,
                                "label": "藤县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17287,
                                "label": "藤县水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17286,
                                "label": "藤县退役军人事务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17285,
                                "label": "藤县应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17284,
                                "label": "藤县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17283,
                                "label": "藤县林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17282,
                                "label": "藤县医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17281,
                                "label": "藤县大黎镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17280,
                                "label": "藤县岭景镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17279,
                                "label": "藤县平福乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17278,
                                "label": "藤县濛江镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17277,
                                "label": "藤县塘步镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17276,
                                "label": "藤县藤州镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17275,
                                "label": "藤县和平镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18228,
                                "label": "藤县古龙镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17274,
                                "label": "藤县同心镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17273,
                                "label": "藤县太平镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17272,
                                "label": "藤县象棋镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17271,
                                "label": "藤县新庆镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17270,
                                "label": "藤县金鸡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17269,
                                "label": "藤县宁康乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17268,
                                "label": "藤县天平镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17267,
                                "label": "藤县埌南镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17266,
                                "label": "藤县东荣镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17250,
                        "label": "蒙山县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17264,
                                "label": "蒙山县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17263,
                                "label": "蒙山县教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17262,
                                "label": "蒙山县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17261,
                                "label": "蒙山县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17260,
                                "label": "蒙山县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17259,
                                "label": "蒙山县蒙山镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17258,
                                "label": "蒙山县夏宜瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17257,
                                "label": "蒙山县陈塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17256,
                                "label": "蒙山县文圩镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17255,
                                "label": "蒙山县黄村镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17254,
                                "label": "蒙山县西河镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17253,
                                "label": "蒙山县新圩镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17252,
                                "label": "蒙山县汉豪乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17251,
                                "label": "蒙山县长坪瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17219,
                        "label": "岑溪市",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17249,
                                "label": "岑溪市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17248,
                                "label": "岑溪市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17247,
                                "label": "岑溪市科学技术和大数据发展局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17246,
                                "label": "岑溪市公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17245,
                                "label": "岑溪市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17244,
                                "label": "岑溪市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17243,
                                "label": "岑溪市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17242,
                                "label": "岑溪市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17241,
                                "label": "岑溪市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17240,
                                "label": "岑溪市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17239,
                                "label": "岑溪市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17238,
                                "label": "岑溪市卫生健康局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17237,
                                "label": "岑溪市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17236,
                                "label": "岑溪市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17235,
                                "label": "岑溪市城市管理监督局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17234,
                                "label": "岑溪市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17233,
                                "label": "岑溪市岑城镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17232,
                                "label": "岑溪市南渡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17231,
                                "label": "岑溪市安平镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17230,
                                "label": "岑溪市波塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17229,
                                "label": "岑溪市三堡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17228,
                                "label": "岑溪市糯垌镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17227,
                                "label": "岑溪市诚谏镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17226,
                                "label": "岑溪市筋竹镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17225,
                                "label": "岑溪市归义镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17224,
                                "label": "岑溪市大业镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17223,
                                "label": "岑溪市梨木镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17222,
                                "label": "岑溪市大隆镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17221,
                                "label": "岑溪市水汶镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17220,
                                "label": "岑溪市马路镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 17155,
                "label": "北海市",
                "ancestor": null,
                "children": [
                    {
                        "id": 17181,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17217,
                                "label": "北海市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17216,
                                "label": "北海市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17215,
                                "label": "北海市科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17212,
                                "label": "北海市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17214,
                                        "label": "北海市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17213,
                                        "label": "北海市公安局网络安全保卫支队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17211,
                                "label": "北海市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17210,
                                "label": "北海市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17209,
                                "label": "北海市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17208,
                                "label": "北海市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17207,
                                "label": "北海市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17206,
                                "label": "北海市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17205,
                                "label": "北海市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17204,
                                "label": "北海市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17203,
                                "label": "北海市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17202,
                                "label": "北海市商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17201,
                                "label": "北海市旅游文体局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 18213,
                                        "label": "北海市文化市场综合行政执法支队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17200,
                                "label": "北海市卫生健康委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17199,
                                "label": "北海市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17198,
                                "label": "北海市审计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17197,
                                "label": "北海市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17196,
                                "label": "北海市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17195,
                                "label": "北海市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17194,
                                "label": "北海市医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17192,
                                "label": "北海市人民防空和海防工作办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17191,
                                "label": "北海市综合行政执法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17189,
                                "label": "北海市行政审批局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17190,
                                        "label": "北海市政务服务中心",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17188,
                                "label": "北海市市政管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17187,
                                "label": "北海市人民政府国有资产监督管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17186,
                                "label": "北海高新技术产业开发区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17185,
                                "label": "北海经济技术开发区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17184,
                                "label": "北海市北部湾经济区规划建设管理办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17183,
                                "label": "北海海洋产业科技园区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17182,
                                "label": "北海市住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17174,
                        "label": "海城区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17180,
                                "label": "北海市海城区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17179,
                                "label": "北海市海城区教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17178,
                                "label": "北海市公安局海城分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17177,
                                "label": "北海市海城区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17176,
                                "label": "北海市海城区文体广电旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17175,
                                "label": "北海市海城区卫生健康局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17167,
                        "label": "银海区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17173,
                                "label": "北海市银海区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17172,
                                "label": "北海市公安局银海分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17171,
                                "label": "北海市银海区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17170,
                                "label": "北海市银海区侨港镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17169,
                                "label": "北海市银海区平阳镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17168,
                                "label": "北海市银海区银滩镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17161,
                        "label": "铁山港区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17166,
                                "label": "北海市铁山港区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17165,
                                "label": "北海市铁山港区教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17164,
                                "label": "北海市公安局铁山港分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17163,
                                "label": "北海市铁山港区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17162,
                                "label": "北海市铁山港区文体广电旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17156,
                        "label": "合浦县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17160,
                                "label": "合浦县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17159,
                                "label": "合浦县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17158,
                                "label": "合浦县融媒体中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17157,
                                "label": "合浦县文体广电旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 17105,
                "label": "防城港市",
                "ancestor": null,
                "children": [
                    {
                        "id": 17125,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17154,
                                "label": "防城港市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17153,
                                "label": "防城港市发展和改革委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17152,
                                "label": "防城港市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17151,
                                "label": "防城港市科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17146,
                                "label": "防城港市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17150,
                                        "label": "防城港市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17149,
                                        "label": "防城港市公安局网上公安局",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17148,
                                        "label": "防城港市公安局网络安全保卫支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17147,
                                        "label": "防城港市公安局禁毒支队[市禁毒办]",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17145,
                                "label": "防城港市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17144,
                                "label": "防城港市人力资源社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17143,
                                "label": "防城港市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17142,
                                "label": "防城港市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17141,
                                "label": "防城港市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17140,
                                "label": "防城港市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17139,
                                "label": "防城港市卫生健康委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17138,
                                "label": "防城港市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17137,
                                "label": "防城港市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17136,
                                "label": "防城港市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17135,
                                "label": "防城港市大数据和行政审批局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17134,
                                "label": "防城港市城市管理监督局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17133,
                                "label": "防城港市外事办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17132,
                                "label": "防城港市人民政府国有资产监督管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17131,
                                "label": "防城港高新技术产业开发区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17130,
                                "label": "防城港经济技术开发区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17129,
                                "label": "防城港市投资促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17128,
                                "label": "防城港市住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17127,
                                "label": "防城港市检验检测中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17126,
                                "label": "防城港市不动产登记中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17118,
                        "label": "东兴市",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17124,
                                "label": "东兴市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17123,
                                "label": "东兴市公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17122,
                                "label": "东兴市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17120,
                                "label": "东兴市商务和口岸管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17119,
                                "label": "东兴镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17113,
                        "label": "港口区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17117,
                                "label": "防城港市港口区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17116,
                                "label": "防城港市港口区教育和科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17115,
                                "label": "防城港市公安局港口分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17114,
                                "label": "防城港市港口区海洋局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17110,
                        "label": "防城区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17112,
                                "label": "防城港市防城区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17111,
                                "label": "防城港市公安局防城分局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17106,
                        "label": "上思县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17109,
                                "label": "上思县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17107,
                                "label": "上思县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17108,
                                        "label": "上思县禁毒宣传教育中心",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 17009,
                "label": "钦州市",
                "ancestor": null,
                "children": [
                    {
                        "id": 17059,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17104,
                                "label": "钦州市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17103,
                                "label": "钦州市发展改革委",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17102,
                                "label": "钦州市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17101,
                                "label": "钦州市科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17100,
                                "label": "钦州市工业和信息化局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17097,
                                "label": "钦州市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17099,
                                        "label": "钦州市公安局巡逻警察支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17098,
                                        "label": "钦州市公安局网络安全保卫支队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17096,
                                "label": "钦州市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17095,
                                "label": "钦州市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17094,
                                "label": "钦州市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17090,
                                "label": "钦州市人力资源和社会保障局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17093,
                                        "label": "钦州市人才服务中心",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17092,
                                        "label": "钦州市就业服务中心",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17091,
                                        "label": "钦州市社会保险事业管理中心",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17089,
                                "label": "钦州市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17088,
                                "label": "钦州市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17087,
                                "label": "钦州市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17086,
                                "label": "钦州市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17085,
                                "label": "钦州市商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17084,
                                "label": "钦州市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17083,
                                "label": "钦州市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17082,
                                "label": "钦州市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17081,
                                "label": "钦州市«çå¥åº·å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17080,
                                "label": "é¦å·å¸åºæ¥ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17079,
                                "label": "é¦å·å¸å®¡è®¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17078,
                                "label": "é¦å·å¸å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17077,
                                "label": "é¦å·å¸ç»è®¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17076,
                                "label": "é¦å·å¸æä¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17075,
                                "label": "é¦å·å¸å½é²å¨ååå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17074,
                                "label": "é¦å·å¸ä¹¡ææ¯å´å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17073,
                                "label": "é¦å·å¸å»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17072,
                                "label": "é¦å·å¸åå¸ç®¡çè¡æ¿æ§æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17071,
                                "label": "é¦å·å¸è¡æ¿å®¡æ¹å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17070,
                                "label": "é¦å·å¸æµ·æ´å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17069,
                                "label": "é¦å·å¸æèµä¿è¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17068,
                                "label": "é¦å·å¸æ»¨æµ·æ°åç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17067,
                                "label": "é¦å·å¸åé¨æ¹¾åä¾¨æèµåºç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17066,
                                "label": "é¦å·å¸ä½æ¿å¬ç§¯éç®¡çä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17063,
                                "label": "é¦å·å¸ä¸å¨æ¹¾ææ¸¸ç®¡çåºç®¡çå§åä¼",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17065,
                                        "label": "é¦å·å¸ä¸å¨æ¹¾ææ¸¸ç®¡çåºå·¥ä½å§åä¼",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17064,
                                        "label": "é¦å·å¸ä¸å¨æ¹¾ææ¸¸ç®¡çåºææ¸¸åå±å±",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 17062,
                                "label": "é¦å·å¸é«æ°ææ¯äº§ä¸å¼ååºç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17061,
                                "label": "å¹¿è¥¿æ²¿æµ·å¬è·¯åå±ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17060,
                                "label": "é¦å·å¸ä¿¡è®¿å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17048,
                        "label": "é¦ååº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17058,
                                "label": "é¦å·å¸é¦ååºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17057,
                                "label": "é¦å·å¸å¬å®å±é¦ååå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17056,
                                "label": "é¦å·å¸é¦ååºå¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17055,
                                "label": "é¦å·å¸é¦ååºæåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17054,
                                "label": "é¦å·å¸é¦ååºå«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17053,
                                "label": "é¦å·å¸é¦ååºå¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17052,
                                "label": "é¦å·å¸é¦ååºå°±ä¸æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17051,
                                "label": "é¦å·å¸é¦ååºåº·çå²­éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17050,
                                "label": "é¦å·å¸é¦ååºæå³°è¡éåäºå¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17049,
                                "label": "é¦å·å¸é¦ååºé£æéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17026,
                        "label": "é¦ååº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17047,
                                "label": "é¦å·å¸é¦ååºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17046,
                                "label": "é¦å·å¸å¬å®å±é¦ååå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17045,
                                "label": "é¦å·å¸é¦ååºå¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17044,
                                "label": "é¦å·å¸é¦ååºæåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17043,
                                "label": "é¦å·å¸é¦ååºå«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17042,
                                "label": "é¦å·å¸é¦ååºæ¿å¡æå¡çç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17041,
                                "label": "é¦å·å¸é¦ååºæåä¿è¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17040,
                                "label": "é¦å·å¸é¦ååºç»æµææ¯å¼ååºç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17039,
                                "label": "é¦å·å¸é¦ååºå°±ä¸æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17038,
                                "label": "é¦å·å¸é¦ååºå¤§ç´éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17037,
                                "label": "é¦å·å¸é¦ååºé£èéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17036,
                                "label": "é¦å·å¸é¦ååºå¤§å¯ºéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17035,
                                "label": "é¦å·å¸é¦ååºå°è£éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17034,
                                "label": "é¦å·å¸é¦ååºæ°æ£ éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17033,
                                "label": "é¦å·å¸é¦ååºé¿æ»©éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17032,
                                "label": "é¦å·å¸é¦ååºå¤§åéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17031,
                                "label": "é¦å·å¸é¦ååºå¹³åéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17030,
                                "label": "é¦å·å¸é¦ååºæ¿åéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17029,
                                "label": "é¦å·å¸é¦ååºéå¡éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17028,
                                "label": "é¦å·å¸é¦ååºé¿ç°è¡éåäºå¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17027,
                                "label": "é¦å·å¸é¦ååºå­æè¡éåäºå¤",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17017,
                        "label": "çµå±±å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17025,
                                "label": "çµå±±å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17024,
                                "label": "çµå±±å¿å¬å®å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17023,
                                "label": "çµå±±å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17022,
                                "label": "çµå±±å¿åä¸åæå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17021,
                                "label": "çµå±±å¿æåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17020,
                                "label": "çµå±±å¿è¡æ¿å®¡æ¹å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17019,
                                "label": "çµå±±å¿ç¾çé¢é²æ§å¶ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17018,
                                "label": "çµå±±å¿æ§å·éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 17010,
                        "label": "æµ¦åå¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17016,
                                "label": "æµ¦åå¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17015,
                                "label": "æµ¦åå¿æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17014,
                                "label": "æµ¦åå¿å¬å®å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17013,
                                "label": "æµ¦åå¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17012,
                                "label": "æµ¦åå¿èªç¶èµæºå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17011,
                                "label": "æµ¦åå¿æåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16929,
                "label": "è´µæ¸¯å¸",
                "ancestor": null,
                "children": [
                    {
                        "id": 16972,
                        "label": "å¸ç´é¨é¨",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 17008,
                                "label": "è´µæ¸¯å¸äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17007,
                                "label": "è´µæ¸¯å¸åå±åæ¹é©å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17006,
                                "label": "è´µæ¸¯å¸æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17005,
                                "label": "è´µæ¸¯å¸ç§å­¦ææ¯å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17004,
                                "label": "è´µæ¸¯å¸å·¥ä¸åä¿¡æ¯åå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17003,
                                "label": "è´µæ¸¯å¸æ°æå®æäºå¡å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 17000,
                                "label": "è´µæ¸¯å¸å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 17002,
                                        "label": "è´µæ¸¯å¸å¬å®å±äº¤éè­¦å¯æ¯é",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 17001,
                                        "label": "è´µæ¸¯å¸å¬å®å±ç½ç»å®å¨ä¿å«æ¯é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16999,
                                "label": "è´µæ¸¯å¸æ°æ¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16998,
                                "label": "è´µæ¸¯å¸å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16997,
                                "label": "è´µæ¸¯å¸è´¢æ¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16996,
                                "label": "è´µæ¸¯å¸äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16995,
                                "label": "è´µæ¸¯å¸èªç¶èµæºå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16994,
                                "label": "è´µæ¸¯å¸çæç¯å¢å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16993,
                                "label": "è´µæ¸¯å¸ä½æ¿ååä¹¡å»ºè®¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16992,
                                "label": "è´µæ¸¯å¸äº¤éè¿è¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16991,
                                "label": "è´µæ¸¯å¸åä¸åæå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16990,
                                "label": "è´µæ¸¯å¸åå¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16989,
                                "label": "è´µæ¸¯å¸æåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16988,
                                "label": "è´µæ¸¯å¸å«çå¥åº·å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16987,
                                "label": "è´µæ¸¯å¸éå½¹åäººäºå¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16986,
                                "label": "è´µæ¸¯å¸åºæ¥ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16985,
                                "label": "è´µæ¸¯å¸å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16984,
                                "label": "è´µæ¸¯å¸æä¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16982,
                                "label": "è´µæ¸¯å¸å¤§æ°æ®åå±åæ¿å¡å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16983,
                                        "label": "è´µæ¸¯å¸12345ä¾¿æ°æå¡ä¸­å¿",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16981,
                                "label": "è´µæ¸¯å¸åå¸ç®¡ççç£å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16980,
                                "label": "è´µæ¸¯å¸å»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16979,
                                "label": "è´µæ¸¯å¸éèå·¥ä½åå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16978,
                                "label": "è´µæ¸¯å¸äººæ°æ¿åºå½æèµäº§çç£ç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16977,
                                "label": "è´µæ¸¯å¸äº§ä¸å­åºç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16976,
                                "label": "è´µæ¸¯å¸æèµä¿è¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16975,
                                "label": "è´µæ¸¯å¸äºè½»åééä½å·¥ä¸èåç¤¾",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16974,
                                "label": "è´µæ¸¯å¸ä½æ¿å¬ç§¯éç®¡çä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16973,
                                "label": "è´µæ¸¯å¸åä¸æºæ¢°åæå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16968,
                        "label": "æ¸¯ååº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16971,
                                "label": "è´µæ¸¯å¸æ¸¯ååºäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16970,
                                "label": "è´µæ¸¯å¸å¬å®å±æ¸¯ååå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16969,
                                "label": "è´µæ¸¯å¸æ¸¯ååºå«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16961,
                        "label": "æ¸¯ååº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16967,
                                "label": "è´µæ¸¯å¸æ¸¯ååºäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16965,
                                "label": "è´µæ¸¯å¸å¬å®å±æ¸¯ååå±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16966,
                                        "label": "æ¸¯åç½å®å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16964,
                                "label": "è´µæ¸¯å¸æ¸¯ååºå»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16963,
                                "label": "è´µæ¸¯å¸æ¸¯ååºæåä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16956,
                        "label": "è¦å¡åº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16960,
                                "label": "è´µæ¸¯å¸è¦å¡åºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16959,
                                "label": "è´µæ¸¯å¸å¬å®å±è¦å¡åå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16958,
                                "label": "è´µæ¸¯å¸è¦å¡åºå¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16957,
                                "label": "è´µæ¸¯å¸è¦å¡åºæåä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16938,
                        "label": "å¹³åå¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16955,
                                "label": "å¹³åå¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16954,
                                "label": "å¹³åå¿æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16951,
                                "label": "å¹³åå¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16953,
                                        "label": "å¹³åå¿å¬å®å±ç½ç»å®å¨ä¿å«å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16952,
                                        "label": "å¹³åå¿å¬å®å±äº¤éè­¦å¯å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16950,
                                "label": "å¹³åå¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16949,
                                "label": "å¹³åå¿äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16948,
                                "label": "å¹³åå¿æåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16947,
                                "label": "å¹³åå¿å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16946,
                                "label": "å¹³åå¿åºæ¥ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16945,
                                "label": "å¹³åå¿å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16944,
                                "label": "å¹³åå¿å¤§æ°æ®åå±åæ¿å¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16943,
                                "label": "å¹³åå¿å½å®ç¶æä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16942,
                                "label": "å¹³åå¿ä¸æ¸¡è¡éåäºå¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16941,
                                "label": "å¹³åå¿æçä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16940,
                                "label": "å¹³åå¿å¤§å®éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16939,
                                "label": "å¹³åå¿å¹³å±±éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16930,
                        "label": "æ¡å¹³å¸",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16937,
                                "label": "æ¡å¹³å¸äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16935,
                                "label": "æ¡å¹³å¸å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16936,
                                        "label": "æ¡å¹³å¸å¬å®å±ç½ç»å®å¨ä¿å«å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16934,
                                "label": "æ¡å¹³å¸èªç¶èµæºå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16933,
                                "label": "æ¡å¹³å¸æåå¹¿çµä½è²åææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16932,
                                "label": "æ¡å¹³å¸åºæ¥ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16931,
                                "label": "è´µæ¸¯å¸æ¡å¹³å¸å°±ä¸æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16786,
                "label": "çæå¸",
                "ancestor": null,
                "children": [
                    {
                        "id": 16885,
                        "label": "å¸ç´é¨é¨",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16928,
                                "label": "çæå¸äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16927,
                                "label": "çæå¸åå±åæ¹é©å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16926,
                                "label": "çæå¸æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16925,
                                "label": "çæå¸ç§å­¦ææ¯å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16924,
                                "label": "çæå¸å·¥ä¸åä¿¡æ¯åå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16921,
                                "label": "çæå¸å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16923,
                                        "label": "çæå¸å¬å®å±ç½ç»å®å¨ä¿å«æ¯é",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16922,
                                        "label": "çæå¸å¬å®å±äº¤éè­¦å¯æ¯é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16920,
                                "label": "çæå¸æ°æ¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16919,
                                "label": "çæå¸å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16918,
                                "label": "玉林市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16917,
                                "label": "玉林市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16916,
                                "label": "玉林市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16915,
                                "label": "玉林市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16914,
                                "label": "玉林市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16913,
                                "label": "玉林市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16912,
                                "label": "玉林市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16911,
                                "label": "玉林市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16910,
                                "label": "玉林市商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16909,
                                "label": "玉林市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16908,
                                "label": "玉林市卫生健康委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16907,
                                "label": "玉林市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16906,
                                "label": "玉林市审计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16905,
                                "label": "玉林市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16904,
                                "label": "玉林市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16903,
                                "label": "玉林市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16901,
                                "label": "玉林市乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16900,
                                "label": "玉林市医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16899,
                                "label": "玉林市城市管理监督局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16898,
                                "label": "玉林市大数据发展和政务服务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16897,
                                "label": "玉林市人民政府国有资产监督管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16896,
                                "label": "玉林市北部湾经济区规划建设管理办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16895,
                                "label": "玉林市机关事务管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16894,
                                "label": "玉林市投资促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16893,
                                "label": "玉林市住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16892,
                                "label": "玉林市退役军人服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16891,
                                "label": "玉林市社会保险事业管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16890,
                                "label": "玉林市就业服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16889,
                                "label": "龙港新区玉林龙潭产业园管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16888,
                                "label": "玉林市玉东新区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16887,
                                "label": "玉柴工业园管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16886,
                                "label": "玉林中医药健康产业园",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16794,
                        "label": "玉州区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16808,
                                "label": "玉林市玉州区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16807,
                                "label": "玉林市玉州区教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16806,
                                "label": "玉林市公安局玉州分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16805,
                                "label": "玉林市玉州区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16804,
                                "label": "玉林市玉州区文化体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16803,
                                "label": "玉林市玉州区茂林镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16802,
                                "label": "玉林市玉州区仁东镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16801,
                                "label": "玉林市玉州区仁厚镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16800,
                                "label": "玉林市玉州区大塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16799,
                                "label": "玉林市玉州区南江街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16798,
                                "label": "玉林市玉州区玉城街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16797,
                                "label": "玉林市玉州区名山街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16796,
                                "label": "玉林市玉州区城西街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16795,
                                "label": "玉林市玉州区城北街道办事处",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16787,
                        "label": "福绵区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16793,
                                "label": "玉林ç¦ç»µåºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16791,
                                "label": "çæå¸ç¦ç»µåºæè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16790,
                                "label": "çæå¸å¬å®å±ç¦ç»µåå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16789,
                                "label": "çæå¸ç¦ç»µåºå¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16788,
                                "label": "çæå¸ç¦ç»µåºå«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16856,
                        "label": "å®¹å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16874,
                                "label": "å®¹å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16873,
                                "label": "å®¹å¿æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16872,
                                "label": "å®¹å¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 18214,
                                        "label": "å®¹å¿å¬å®å±äº¤éç®¡çå¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16871,
                                "label": "å®¹å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16870,
                                "label": "å®¹å¿è´¢æ¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16869,
                                "label": "å®¹å¿äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16868,
                                "label": "å®¹å¿æä½å¹¿çµåææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16867,
                                "label": "å®¹å¿å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16866,
                                "label": "å®¹å¿å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16865,
                                "label": "å®¹å¿å»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16863,
                                "label": "å®¹å¿ä¸å¨äº§ç»è®°ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16862,
                                "label": "å®¹å¿ç½æ±éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16861,
                                "label": "å®¹å¿å®¹è¥¿éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16860,
                                "label": "å®¹å¿å¿åºéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16859,
                                "label": "å®¹å¿åééäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16858,
                                "label": "å®¹å¿èªè¯éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16857,
                                "label": "å®¹å¿ç³å¯¨éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16850,
                        "label": "éå·å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16855,
                                "label": "éå·å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16853,
                                "label": "éå·å¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16854,
                                        "label": "éå·å¿å¬å®å±äº¤éç®¡çå¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16852,
                                "label": "éå·å¿å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16851,
                                "label": "éå·å¿åå»ºç®¡ççå¯å¤§é",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16831,
                        "label": "åç½å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16848,
                                "label": "åç½å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16846,
                                "label": "åç½å¿æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16845,
                                "label": "åç½å¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 18229,
                                        "label": "åç½å¿å¬å®å±äº¤éç®¡çå¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16844,
                                "label": "åç½å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16843,
                                "label": "åç½å¿èªç¶èµæºå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16842,
                                "label": "åç½å¿äº¤éè¿è¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16841,
                                "label": "åç½å¿åä¸åæå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16840,
                                "label": "åç½å¿æä½å¹¿çµåææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16839,
                                "label": "åç½å¿å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16838,
                                "label": "åç½å¿åºæ¥ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16837,
                                "label": "åç½å¿å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16836,
                                "label": "åç½å¿ç»è®¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16835,
                                "label": "åç½å¿ä¹¡ææ¯å´å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16834,
                                "label": "åç½å¿å»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16833,
                                "label": "åç½å¿å®æ½­éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16832,
                                "label": "åç½å¿äºå±±éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16809,
                        "label": "å´ä¸å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16829,
                                "label": "å´ä¸å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16828,
                                "label": "å´ä¸å¿æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16827,
                                "label": "å´ä¸å¿å¬å®å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16826,
                                "label": "å´ä¸å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16825,
                                "label": "å´ä¸å¿ä¸å¨äº§ç»è®°ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16824,
                                "label": "å´ä¸å¿åå»ºç®¡ççå¯å¤§é",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16823,
                                "label": "å´ä¸å¿åä¸åæå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16822,
                                "label": "å´ä¸å¿å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16821,
                                "label": "å´ä¸å¿ç¤¾ä¼ä¿é©äºä¸ç®¡çä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16820,
                                "label": "å´ä¸å¿å«çè®¡ççç£æ",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16819,
                                "label": "å´ä¸å¿å¬å±å°±ä¸åäººææå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16818,
                                "label": "å´ä¸å¿å±±å¿éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16817,
                                "label": "å´ä¸å¿æ´é³éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16816,
                                "label": "å´ä¸å¿è²å¡éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16815,
                                "label": "å´ä¸å¿åééäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16814,
                                "label": "兴业县卖酒镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16813,
                                "label": "兴业县龙安镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16812,
                                "label": "兴业县高峰镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16811,
                                "label": "兴业县沙塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16810,
                                "label": "兴业县石南镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16875,
                        "label": "北流市",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16883,
                                "label": "北流市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16882,
                                "label": "北流市发展和改革局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16881,
                                "label": "北流市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16880,
                                "label": "北流市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 18215,
                                        "label": "北流市公安局交通管理大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16879,
                                "label": "北流市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16878,
                                "label": "北流市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16877,
                                "label": "北流市文体广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16876,
                                "label": "北流市城市管理监督局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16674,
                "label": "百色市",
                "ancestor": null,
                "children": [
                    {
                        "id": 16752,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16785,
                                "label": "百色市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16784,
                                "label": "百色市发展和改革委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16783,
                                "label": "百色市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16782,
                                "label": "百色市工业和信息化局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16779,
                                "label": "百色市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16781,
                                        "label": "百色市禁毒办",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16780,
                                        "label": "百色市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16778,
                                "label": "百色市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16777,
                                "label": "百色市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16776,
                                "label": "百色市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16775,
                                "label": "百色市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16774,
                                "label": "百色市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16773,
                                "label": "百色市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16772,
                                "label": "百色市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16771,
                                "label": "百色市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16770,
                                "label": "百色市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16769,
                                "label": "百色市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16768,
                                "label": "百色市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16767,
                                "label": "百色市卫生健康委员会",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 18216,
                                        "label": "百色市卫生监督所",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16766,
                                "label": "百色市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16765,
                                "label": "百色市审计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16764,
                                "label": "百色市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16763,
                                "label": "百色市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16762,
                                "label": "百色市人民防空和边防办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16761,
                                "label": "百色市医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16760,
                                "label": "百色市城市管理监督局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16759,
                                "label": "百色市大数据发展局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16758,
                                "label": "百色市公共资源交易中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16757,
                                "label": "百色市投资促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16756,
                                "label": "百色市住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16755,
                                "label": "广西百色国家农业科技园区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16754,
                                "label": "百色起义纪念园管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16753,
                                "label": "¾è²å¸ç¾ä¸æ°åºç®¡å§ä¼",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16748,
                        "label": "å³æ±åº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16751,
                                "label": "ç¾è²å¸å³æ±åºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16750,
                                "label": "ç¾è²å¸å³æ±åºèåªä½ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16749,
                                "label": "ç¾è²å¸å³æ±åºæ±ªç¸ç¶æä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16732,
                        "label": "ç°é³åº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16747,
                                "label": "ç¾è²å¸ç°é³åºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16746,
                                "label": "ç¾è²å¸ç°é³åºæè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16745,
                                "label": "ç¾è²å¸å¬å®å±ç°é³åå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16744,
                                "label": "ç¾è²å¸å¬å®å±ç°é³åå±äº¤è­¦å¤§é",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16743,
                                "label": "ç¾è²å¸ç°é³åºå¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16742,
                                "label": "ç¾è²å¸ç°é³åºäººç¤¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16741,
                                "label": "ç¾è²å¸ç°é³åºæ°´å©å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16740,
                                "label": "ç¾è²å¸ç°é³åºåå¡æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16739,
                                "label": "ç¾è²å¸ç°é³åºæåä½è²å¹¿çµåææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16738,
                                "label": "ç¾è²å¸ç°é³åºå«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16737,
                                "label": "ç¾è²å¸ç°é³åºå»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16736,
                                "label": "ç¾è²å¸ç°é³åºå¤§æ°æ®åå±å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16735,
                                "label": "ç¾è²å¸ç°é³åºæèµä¿è¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16734,
                                "label": "ç¾è²å¸ç°é³åºå·´å«ä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16733,
                                "label": "ç¾è²å¸ç°é³åºç¾è²éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16727,
                        "label": "ç°ä¸å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16731,
                                "label": "ç°ä¸å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16730,
                                "label": "ç°ä¸å¿å¬å®å±äº¤éè­¦å¯å¤§é",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16729,
                                "label": "ç°ä¸å¿æåä½è²å¹¿çµåææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16728,
                                "label": "ç°ä¸å¿èåªä½ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16722,
                        "label": "å¹³æå¸",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16726,
                                "label": "å¹³æå¸äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16725,
                                "label": "å¹³æå¸æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16723,
                                "label": "å¹³æå¸å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16724,
                                        "label": "å¹³æå¸å¬å®å±äº¤è­¦å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16716,
                        "label": "å¾·ä¿å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16721,
                                "label": "å¾·ä¿å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16720,
                                "label": "å¾·ä¿å¿å¬å®å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16719,
                                "label": "å¾·ä¿å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16718,
                                "label": "å¾·ä¿å¿äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16717,
                                "label": "å¾·ä¿å¿æ¿å¡æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16712,
                        "label": "é£å¡å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16715,
                                "label": "é£å¡å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16714,
                                "label": "é£å¡å¿å¬å®å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16713,
                                "label": "é£å¡å¿èåªä½ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16704,
                        "label": "åäºå¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16711,
                                "label": "åäºå¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16710,
                                "label": "åäºå¿å¬å®å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16709,
                                "label": "åäºå¿ä½æ¿ååä¹¡å»ºè®¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16708,
                                "label": "åäºå¿äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16707,
                                "label": "åäºå¿çæ´ªç¶æä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16706,
                                "label": "åäºå¿æ³åéäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16705,
                                "label": "åäºå¿é»æ¥¼éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16696,
                        "label": "ä¹业县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16703,
                                "label": "乐业县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16701,
                                "label": "乐业县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16702,
                                        "label": "乐业县公安局交通管理大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16700,
                                "label": "乐业县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16699,
                                "label": "乐业县融媒体中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16698,
                                "label": "乐业县图书馆",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16697,
                                "label": "中国共产党乐业县委员会宣传部",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16692,
                        "label": "田林县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16695,
                                "label": "田林县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16694,
                                "label": "田林县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16693,
                                "label": "田林县医疗保障局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16684,
                        "label": "西林县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16691,
                                "label": "西林县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16690,
                                "label": "西林县民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16689,
                                "label": "西林县人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16688,
                                "label": "西林县农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16687,
                                "label": "西林统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16686,
                                "label": "西林县招商促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16685,
                                "label": "西林县马蚌镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16678,
                        "label": "隆林各族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16682,
                                "label": "隆林各族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16681,
                                "label": "隆林各族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16680,
                                "label": "隆林各族自治县人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16679,
                                "label": "隆林各族自治县机关后勤服务中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16675,
                        "label": "靖西市",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16676,
                                "label": "靖西市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16529,
                "label": "贺州市",
                "ancestor": null,
                "children": [
                    {
                        "id": 16631,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16673,
                                "label": "贺州市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16672,
                                "label": "贺州市发展和改革委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16671,
                                "label": "贺州市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16670,
                                "label": "贺州市民族宗教事务委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16667,
                                "label": "贺州市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16669,
                                        "label": "贺州市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16668,
                                        "label": "贺州市公安局网络安全保卫支队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16666,
                                "label": "贺州市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16665,
                                "label": "贺州市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16664,
                                "label": "贺州市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16662,
                                "label": "贺州市人力资源和社会保障局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16663,
                                        "label": "贺州市就业服务中心",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16661,
                                "label": "贺州市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16660,
                                "label": "贺州市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16659,
                                "label": "贺州市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16658,
                                "label": "贺州市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16657,
                                "label": "贺州市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16656,
                                "label": "贺州市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16655,
                                "label": "贺州市文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16653,
                                "label": "贺州市卫生健康委",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16654,
                                        "label": "贺州市卫生计生监督所",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16652,
                                "label": "贺州市退役军人事务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16651,
                                "label": "贺州市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16650,
                                "label": "贺州市审计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16649,
                                "label": "贺州市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18217,
                                "label": "贺州市体育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16648,
                                "label": "贺州市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16647,
                                "label": "贺州市乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16646,
                                "label": "贺州市医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16645,
                                "label": "贺州市城市管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16643,
                                "label": "贺州市行政审批局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16644,
                                        "label": "贺州市12345政府服务热线",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16641,
                                "label": "贺州市市人民政府国有资产监督管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16640,
                                "label": "贺州市投资促进和商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16639,
                                "label": "贺州市住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16638,
                                "label": "贺州市中小企业服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16637,
                                "label": "贺州市人民政府发展研究中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16636,
                                "label": "广西黄姚古镇旅游文化产业区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16635,
                                "label": "贺州高新技术产业开发区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16634,
                                "label": "广西东融先行示范区[贺州]管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16633,
                                "label": "贺州市公共资源交易中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16632,
                                "label": "贺州市平桂矿区管理处",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16608,
                        "label": "八步区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16630,
                                "label": "贺州市八步区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16629,
                                "label": "贺州市八步区教育和科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16628,
                                "label": "贺州市公安局八步分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16627,
                                "label": "贺州市八步区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16626,
                                "label": "贺州市八步区水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16625,
                                "label": "贺州市八步区市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16624,
                                "label": "贺州市八步区应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16623,
                                "label": "八步区就业服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16622,
                                "label": "贺州市八步区八步街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16621,
                                "label": "贺州市八步区城东街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16620,
                                "label": "贺州市八步区江南街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16619,
                                "label": "贺州市八步区贺街镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16618,
                                "label": "贺州市八步区步头镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16617,
                                "label": "贺州市八步区莲塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16616,
                                "label": "贺州市八步区八步区大宁镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16615,
                                "label": "贺州市八步区南乡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16614,
                                "label": "贺州市八步区开山镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16613,
                                "label": "贺州市八步区里松镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16612,
                                "label": "贺州市八步区信都镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16611,
                                "label": "贺州市八步区灵峰镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16610,
                                "label": "贺州市八步区仁义镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16609,
                                "label": "贺州市八步区黄洞瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16586,
                        "label": "平桂区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16607,
                                "label": "中国共产党贺州市平桂区委员会宣传部",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16606,
                                "label": "贺州市平桂区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16605,
                                "label": "贺州市公安局平桂分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16604,
                                "label": "贺州市平桂区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16602,
                                "label": "贺州市平桂区人社局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16603,
                                        "label": "贺州市平桂区就业服务中心",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16601,
                                "label": "贺州市平桂区住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16600,
                                "label": "贺州市平桂区应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16599,
                                "label": "贺州市平桂区文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16598,
                                "label": "贺州市平桂区医疗保障管理服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16597,
                                "label": "贺州市平桂区城市管理综合执法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16596,
                                "label": "贺州市平桂区投资促进服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16595,
                                "label": "贺州市平桂区西湾街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16594,
                                "label": "贺州市平桂区黄田镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16593,
                                "label": "贺州市平桂区沙田镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16592,
                                "label": "贺州市平桂区大平瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16591,
                                "label": "贺州市平桂区鹅塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16590,
                                "label": "贺州市平桂区公会镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16589,
                                "label": "贺州市平桂区水口镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16588,
                                "label": "贺州市平桂区望高镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16587,
                                "label": "贺州市平桂区羊头镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16563,
                        "label": "昭平县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16585,
                                "label": "昭平县人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16584,
                                "label": "昭平县教育和科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16582,
                                "label": "昭平县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16583,
                                        "label": "昭平县公安局交通管理大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16581,
                                "label": "昭平县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16580,
                                "label": "昭平县城市管理综合执法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16579,
                                "label": "昭平县应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16578,
                                "label": "昭平县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16577,
                                "label": "昭平县文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16576,
                                "label": "昭平县疾病预防控制中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16575,
                                "label": "昭平县昭平镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16574,
                                "label": "昭平县文竹镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16573,
                                "label": "昭平县凤凰乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16572,
                                "label": "昭平县木格乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16571,
                                "label": "昭平县黄姚镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16570,
                                "label": "昭平县富罗镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16569,
                                "label": "昭平县北陀镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16568,
                                "label": "昭平县仙回瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16567,
                                "label": "昭平县马江镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16566,
                                "label": "昭平县五将镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16565,
                                "label": "昭平县走马镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16564,
                                "label": "昭平县樟木林镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16535,
                        "label": "钟山县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16562,
                                "label": "钟山县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16560,
                                "label": "钟山县教育和科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16558,
                                "label": "钟山县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16559,
                                        "label": "钟山县公安局交通警察大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16557,
                                "label": "钟山县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16556,
                                "label": "钟山县自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16555,
                                "label": "钟山县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16554,
                                "label": "钟山县文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16553,
                                "label": "钟山县卫生和计划生育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16552,
                                "label": "钟山县应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16551,
                                "label": "钟山县退役军人事务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16550,
                                "label": "钟山县医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16549,
                                "label": "钟山县城市管理综合执法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16548,
                                "label": "钟山县公共就业和人才服务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16547,
                                "label": "钟山县钟山镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16546,
                                "label": "钟山县花山瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16545,
                                "label": "钟山县回龙镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16544,
                                "label": "钟山县两安瑶族乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16543,
                                "label": "钟山县石龙镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16542,
                                "label": "钟山县凤翔镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16541,
                                "label": "钟山县珊瑚镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16540,
                                "label": "钟山县同古镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16539,
                                "label": "钟山县公安镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16538,
                                "label": "钟山县清塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16537,
                                "label": "钟山县红花镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16536,
                                "label": "钟山县燕塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16530,
                        "label": "富川瑶族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16534,
                                "label": "富川瑶族自治县人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16533,
                                "label": "富川瑶族自治县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16532,
                                "label": "富川瑶族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 18218,
                                "label": "富川瑶族自治县自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16531,
                                "label": "富川瑶族自治县文体广电和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16424,
                "label": "河池市",
                "ancestor": null,
                "children": [
                    {
                        "id": 16494,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16528,
                                "label": "河池市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16527,
                                "label": "河池市发展和改革委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16526,
                                "label": "河池市教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16525,
                                "label": "河池市科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16524,
                                "label": "河池市工业和信息化局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16520,
                                "label": "河池市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16523,
                                        "label": "河池市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16522,
                                        "label": "河池市公安局网络安全保卫支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16521,
                                        "label": "河池市禁毒委员会办公室",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16519,
                                "label": "河池市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16518,
                                "label": "河池市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16517,
                                "label": "河池市财政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16516,
                                "label": "河池市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16514,
                                "label": "河池市自然资源局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16515,
                                        "label": "河池市不动产登记中心",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16513,
                                "label": "河池市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16512,
                                "label": "河池市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16511,
                                "label": "河池市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16510,
                                "label": "河池市水利局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16509,
                                "label": "河池市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16508,
                                "label": "河池市商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16507,
                                "label": "河池市文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16506,
                                "label": "河池市应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16505,
                                "label": "河池市卫生健康委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16504,
                                "label": "河池市审计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16503,
                                "label": "河池市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16502,
                                "label": "河池市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16501,
                                "label": "河池市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16500,
                                "label": "河池市乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16499,
                                "label": "河池市大数据发展局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16498,
                                "label": "河池市医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16497,
                                "label": "河池市城市管理执法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16496,
                                "label": "河池市投资促进局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16495,
                                "label": "河池住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16488,
                        "label": "金城江区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16493,
                                "label": "河池市金城江区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16492,
                                "label": "河池市公安局金城江分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16491,
                                "label": "河池市公安局金城江分局网络安全保卫大队",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16490,
                                "label": "河池市金城江区乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16489,
                                "label": "河池市金城江区司法局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16483,
                        "label": "宜州区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16487,
                                "label": "河池市宜州区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16486,
                                "label": "河池市公安局宜州分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16485,
                                "label": "河池市宜州区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16484,
                                "label": "河池市宜州区文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16475,
                        "label": "南丹县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16482,
                                "label": "南丹县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16479,
                                "label": "南丹县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16481,
                                        "label": "南丹县公安局指挥中心",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16480,
                                        "label": "南丹县公安局网络安全保卫大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16478,
                                "label": "南丹县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16477,
                                "label": "南丹县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16476,
                                "label": "南丹县大数据发展局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16471,
                        "label": "天峨县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16474,
                                "label": "天峨县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16473,
                                "label": "天峨县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16472,
                                "label": "天峨县司法局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16465,
                        "label": "凤山县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16470,
                                "label": "凤山县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16469,
                                "label": "凤山县教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16468,
                                "label": "凤山县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16467,
                                "label": "凤山县大数据发展局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16466,
                                "label": "凤山县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16458,
                        "label": "东兰县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16464,
                                "label": "东兰县人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16463,
                                "label": "东兰县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16462,
                                "label": "东兰县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16461,
                                "label": "东兰县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16460,
                                "label": "东兰县大数据发展局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16459,
                                "label": "东兰县投资促进局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16452,
                        "label": "罗城仫佬族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16457,
                                "label": "罗城仫佬族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16455,
                                "label": "罗城仫佬族自治县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16456,
                                        "label": "罗城仫佬族自治县公安局网络安全保卫大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16454,
                                "label": "罗城仫佬族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16453,
                                "label": "罗城仫佬族自治县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16444,
                        "label": "环江毛南族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16450,
                                "label": "环江毛南族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16448,
                                "label": "环江毛南族自治县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16449,
                                        "label": "环江毛南族自治县公安局网络安全保卫大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16447,
                                "label": "环江毛南族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16446,
                                "label": "环江毛南族自治县卫生健康局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16445,
                                "label": "环江毛南族自治县投资促进局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16438,
                        "label": "巴马瑶族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16443,
                                "label": "巴马瑶族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16442,
                                "label": "巴马瑶族自治县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16441,
                                "label": "巴马瑶族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16440,
                                "label": "巴马瑶族自治县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16430,
                        "label": "都安瑶族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16437,
                                "label": "都安瑶族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16436,
                                "label": "都安瑶族自治县教育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16434,
                                "label": "都安瑶族自治县公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16435,
                                        "label": "都安瑶族自治县公安局网络安全保卫大队",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16433,
                                "label": "都安瑶族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16432,
                                "label": "都安瑶族自治县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16431,
                                "label": "都安瑶族自治县东庙乡人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16425,
                        "label": "大化瑶族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16429,
                                "label": "大化瑶族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16428,
                                "label": "大化瑶族自治县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16427,
                                "label": "大化瑶族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16426,
                                "label": "大化瑶族自治县文化广电体育和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16285,
                "label": "来宾市",
                "ancestor": null,
                "children": [
                    {
                        "id": 16392,
                        "label": "市直部门",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16423,
                                "label": "来宾市人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16422,
                                "label": "来宾市发展和改革委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16421,
                                "label": "来宾市教育体育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16420,
                                "label": "来宾市科学技术局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16419,
                                "label": "来宾市工业和信息化局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16416,
                                "label": "来宾市公安局",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16418,
                                        "label": "来宾市公安局交通警察支队",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16417,
                                        "label": "来宾市公安局来宾华侨管理区分局",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16415,
                                "label": "来宾市民政局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16414,
                                "label": "来宾市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16413,
                                "label": "来宾市人力资源和社会保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16412,
                                "label": "来宾市自然资源局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16411,
                                "label": "来宾市生态环境局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16410,
                                "label": "来宾市住房和城乡建设局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16409,
                                "label": "来宾市交通运输局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16408,
                                "label": "来宾市农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16407,
                                "label": "来宾市商务局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16406,
                                "label": "来宾市文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16405,
                                "label": "来宾市卫生健康委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16404,
                                "label": "来宾市市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16403,
                                "label": "来宾市统计局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16402,
                                "label": "来宾市林业局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16401,
                                "label": "来宾市乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16399,
                                "label": "来宾市城市管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16398,
                                "label": "来宾市政务服务和大数据发展局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16397,
                                "label": "来宾市住房公积金管理中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16396,
                                "label": "来宾市农业机械化服务中心",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16395,
                                "label": "来宾市卫生计生监督所",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16394,
                                "label": "来宾市工业园区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16393,
                                "label": "来宾市三江口新区管理委员会",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16355,
                        "label": "兴宾区",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16391,
                                "label": "来宾市兴宾区人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16390,
                                "label": "来宾市兴宾区教育体育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16389,
                                "label": "来宾市公安局兴宾分局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16388,
                                "label": "来宾市兴宾区司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16387,
                                "label": "来宾市兴宾区农业农村局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16386,
                                "label": "来宾市兴宾区文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16385,
                                "label": "来宾市兴宾区卫生健康局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16384,
                                "label": "来宾市兴宾区应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16383,
                                "label": "来宾市兴宾区市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16382,
                                "label": "来宾市兴宾区医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16381,
                                "label": "来宾市兴宾区征地搬迁安置工作办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16380,
                                "label": "来宾市兴宾区城市管理规划建设执法监察大队",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16379,
                                "label": "来宾市兴宾区凤凰镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16378,
                                "label": "来宾市兴宾区三五镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16377,
                                "label": "来宾市兴宾区七洞乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16376,
                                "label": "来宾市兴宾区南泗乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16375,
                                "label": "来宾市兴宾区良江镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16374,
                                "label": "来宾市兴宾区城厢镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16373,
                                "label": "来宾市兴宾区蒙村镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16372,
                                "label": "来宾市兴宾区良塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16371,
                                "label": "来宾市兴宾区城北街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16370,
                                "label": "来宾市兴宾区大湾镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16369,
                                "label": "来宾市兴宾区正龙乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16368,
                                "label": "来宾市兴宾区石陵镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16367,
                                "label": "来宾市兴宾区河西街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16366,
                                "label": "来宾市兴宾区迁江镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16365,
                                "label": "来宾市兴宾区城东街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16364,
                                "label": "来宾市兴宾区小平阳镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16363,
                                "label": "来宾市兴宾区石牙镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16362,
                                "label": "来宾市兴宾区来华街道办事处",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16361,
                                "label": "来宾市兴宾区高安乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16360,
                                "label": "来宾市兴宾区五山镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16359,
                                "label": "来宾市兴宾区陶邓镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16358,
                                "label": "来宾市兴宾区寺山镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16357,
                                "label": "来宾市兴宾区桥巩镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16356,
                                "label": "来宾市兴宾区平阳镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16340,
                        "label": "忻城县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16354,
                                "label": "忻城县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16353,
                                "label": "忻城县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16352,
                                "label": "忻城县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16351,
                                "label": "忻城县文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16350,
                                "label": "忻城县思练镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16349,
                                "label": "忻城县古蓬镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16348,
                                "label": "忻城县红渡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16347,
                                "label": "忻城县新圩乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16346,
                                "label": "忻城县欧洞乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16345,
                                "label": "忻城县安东乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16344,
                                "label": "忻城县遂意乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16343,
                                "label": "忻城县大塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16342,
                                "label": "忻城县果遂镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16341,
                                "label": "忻城县城关镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16319,
                        "label": "象州县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16339,
                                "label": "象州县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16338,
                                "label": "象州县教育体育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16337,
                                "label": "象州县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16336,
                                "label": "象州县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16335,
                                "label": "象州县经济贸易局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16334,
                                "label": "象州县文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16333,
                                "label": "象州县应急管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16332,
                                "label": "象州县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16331,
                                "label": "象州县工业园区管理委员会",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16330,
                                "label": "象州县罗秀镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16329,
                                "label": "象州县大乐镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16328,
                                "label": "象州县中平镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16327,
                                "label": "象州县石龙镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16326,
                                "label": "象州县妙皇乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16325,
                                "label": "象州县运江镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16324,
                                "label": "象州县象州镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16323,
                                "label": "象州县马坪镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16322,
                                "label": "象州县百丈乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16321,
                                "label": "象州县寺村镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16320,
                                "label": "象州县水晶乡人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16300,
                        "label": "武宣县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16318,
                                "label": "武宣县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16317,
                                "label": "武宣县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16316,
                                "label": "武宣县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16315,
                                "label": "武宣县文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16314,
                                "label": "武宣县卫生健康局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16313,
                                "label": "武宣县市场监督管理局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16312,
                                "label": "武宣县医疗保障局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16311,
                                "label": "武宣县乡村振兴局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16310,
                                "label": "武宣县武宣镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16309,
                                "label": "武宣县东乡镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16308,
                                "label": "武宣县黄茆镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16307,
                                "label": "武宣县金鸡乡人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16306,
                                "label": "武宣县禄新镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16305,
                                "label": "武宣县思灵镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16304,
                                "label": "武宣县三里镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16303,
                                "label": "武宣县通挽镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16302,
                                "label": "武宣县桐岭镇人民政府",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16301,
                                "label": "武宣县二塘镇人民政府",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16294,
                        "label": "金秀瑶族自治县",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16298,
                                "label": "金秀瑶族自治县人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16297,
                                "label": "金秀瑶族自治县公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16296,
                                "label": "金秀瑶族自治县司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16295,
                                "label": "金秀瑶族自治县文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16286,
                        "label": "合山市",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16293,
                                "label": "合山市人民政府办公室",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16292,
                                "label": "合山市教育体育局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16291,
                                "label": "合山市公安局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16290,
                                "label": "合山市司法局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16289,
                                "label": "合山市文化广电和旅游局",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16288,
                                "label": "合山市卫生¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16287,
                                "label": "åå±±å¸å»çä¿éå±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            },
            {
                "id": 16167,
                "label": "å´å·¦å¸",
                "ancestor": null,
                "children": [
                    {
                        "id": 16253,
                        "label": "å¸ç´é¨é¨",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16284,
                                "label": "å´å·¦å¸äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16283,
                                "label": "å´å·¦å¸åå±åæ¹é©å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16282,
                                "label": "å´å·¦å¸å·¥ä¸åä¿¡æ¯åå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16281,
                                "label": "å´å·¦å¸æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16280,
                                "label": "å´å·¦å¸ç§å­¦ææ¯å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16276,
                                "label": "å´å·¦å¸å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16279,
                                        "label": "å´å·¦å¸å¬å®å±ç½ç»å®å¨ä¿å«æ¯é",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16278,
                                        "label": "å´å·¦å¸å¬å®å±åºå¥å¢ç®¡çæ¯é",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 16277,
                                        "label": "å´å·¦å¸å¬å®å±äº¤éè­¦å¯æ¯é",
                                        "ancestor": null,
                                        "users": null
                                    },
                                    {
                                        "id": 18219,
                                        "label": "å´å·¦äº¤è­¦ç´å±äºå¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16275,
                                "label": "å´å·¦å¸æ°æ¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16274,
                                "label": "å´å·¦å¸å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16273,
                                "label": "å´å·¦å¸è´¢æ¿å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16272,
                                "label": "å´å·¦å¸äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16271,
                                "label": "å´å·¦å¸èªç¶èµæºå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16270,
                                "label": "å´å·¦å¸çæç¯å¢å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16269,
                                "label": "å´å·¦å¸ä½æ¿ååä¹¡å»ºè®¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16268,
                                "label": "å´å·¦å¸äº¤éè¿è¾å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16267,
                                "label": "å´å·¦å¸æä¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16266,
                                "label": "å´å·¦å¸æååææ¸¸å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16265,
                                "label": "å´å·¦å¸å«çå¥åº·å§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16262,
                                "label": "å´å·¦å¸ç»è®¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16261,
                                "label": "å´å·¦å¸éå½¹åäººäºå¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16260,
                                "label": "å´å·¦å¸å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16258,
                                "label": "å´å·¦å¸å¤§æ°æ®åå±å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16257,
                                "label": "å´å·¦å¸ä¸­æ³°å´å·¦äº§ä¸å­ç®¡å§ä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16256,
                                "label": "å´å·¦å¸ä½æ¿å¬ç§¯éç®¡çä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16255,
                                "label": "å´å·¦å¸å·¦æ±æ²»æ±çåºå·¥ç¨ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16254,
                                "label": "å´å·¦å¸æèµä¿è¿å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16250,
                        "label": "æ±å·åº",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16252,
                                "label": "å´å·¦å¸æ±å·åºäººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16251,
                                "label": "å´å·¦å¸å¬å®å±æ±å·åå±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16238,
                        "label": "æ¶ç»¥å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16249,
                                "label": "æ¶ç»¥å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16248,
                                "label": "æ¶ç»¥å¿æè²å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16247,
                                "label": "æ¶ç»¥å¿å¬å®å±äº¤éè­¦å¯å¤§é",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16246,
                                "label": "æ¶ç»¥å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16245,
                                "label": "æ¶ç»¥å¿æåææ¸¸åä½è²å¹¿çµå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16244,
                                "label": "æ¶ç»¥å¿åä¹¡ç»¼åæ§æ³ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16243,
                                "label": "æ¶ç»¥å¿å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16242,
                                "label": "ä¸­å½ä¸çåå®ç©ºæ¸¯æ¶ç»¥ç»æµåºç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16241,
                                "label": "æ¶ç»¥å¿æ°å®éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16240,
                                "label": "æ¶ç»¥å¿æ¸ æ§éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16239,
                                "label": "æ¶ç»¥å¿ä¸é¨éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16231,
                        "label": "å®æå¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16237,
                                "label": "å®æå¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16235,
                                "label": "å®æå¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16236,
                                        "label": "å®æå¿å¬å®å±äº¤éè­¦å¯å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16234,
                                "label": "å®æå¿äººåèµæºåç¤¾ä¼ä¿éå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16233,
                                "label": "å®æå¿æåææ¸¸åä½è²å¹¿çµå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16232,
                                "label": "å®æå¿åä¸­éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16207,
                        "label": "é¾å·å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16230,
                                "label": "é¾å·å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16229,
                                "label": "é¾å·å¿éå½¹åäººäºå¡å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16227,
                                "label": "é¾å·å¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16228,
                                        "label": "å´å·¦äº¤è­¦é¾å·å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16226,
                                "label": "é¾å·å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16224,
                                "label": "é¾å·å¿æåææ¸¸åä½è²å¹¿çµå±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16225,
                                        "label": "é¾å·å¿ææ¸¸åå±å±",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16223,
                                "label": "é¾å·å¿å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16222,
                                "label": "é¾å·å¿æ°´å©å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16221,
                                "label": "é¾å·å¿å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16220,
                                "label": "é¾å·å¿åä¹¡ç»¼åæ§æ³ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16219,
                                "label": "é¾å·å¿åæ°´éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16218,
                                "label": "é¾å·å¿ä¸å»éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16217,
                                "label": "é¾å·å¿ä¸éä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16216,
                                "label": "é¾å·å¿ä¸éä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16215,
                                "label": "é¾å·å¿å«è§ä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16214,
                                "label": "é¾å·å¿éé¾éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16213,
                                "label": "é¾å·å¿å½¬æ¡¥ä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16212,
                                "label": "é¾å·å¿æ­¦å¾·ä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16211,
                                "label": "é¾å·å¿æ°´å£éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16210,
                                "label": "é¾å·å¿ä¸é¾ä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16209,
                                "label": "é¾å·å¿é¾å·éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16208,
                                "label": "é¾å·å¿éåä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16200,
                        "label": "å¤§æ°å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16206,
                                "label": "å¤§æ°å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16204,
                                "label": "å¤§æ°å¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16205,
                                        "label": "å¤§æ°å¿å¬å®å±äº¤éè­¦å¯å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16202,
                                "label": "å¹¿è¥¿å¤§æ°é»æ°´æ²³å½å®¶æ¹¿å°å¬å­ç®¡çä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16201,
                                "label": "å¹¿è¥¿æ©åå½å®¶çº§èªç¶ä¿æ¤åºç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16203,
                                "label": "å¤§æ°å¿æèµä¿è¿å±",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16189,
                        "label": "å¤©ç­å¿",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16199,
                                "label": "å¤©ç­å¿äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16197,
                                "label": "å¤©ç­å¿å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16198,
                                        "label": "å´å·¦äº¤è­¦å¤©ç­å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16196,
                                "label": "å¤©ç­å¿å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16195,
                                "label": "å¤©ç­å¿èªç¶èµæºå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16193,
                                "label": "å¤©ç­å¿æåææ¸¸ä¸ä½è²å¹¿çµå±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16194,
                                        "label": "å¤©ç­å¿æç©ç®¡çæ",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16192,
                                "label": "å¤©ç­å¿åä¹¡ç»¼åæ§æ³ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16191,
                                "label": "å¤©ç­å¿ä¸æ ä¹¡äººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16190,
                                "label": "å¤©ç­å¿è¿ç»éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    },
                    {
                        "id": 16168,
                        "label": "å­ç¥¥å¸",
                        "ancestor": null,
                        "children": [
                            {
                                "id": 16188,
                                "label": "å­ç¥¥å¸äººæ°æ¿åºåå¬å®¤",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16185,
                                "label": "å­ç¥¥å¸å¬å®å±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16186,
                                        "label": "å­ç¥¥å¸å¬å®å±äº¤éè­¦å¯å¤§é",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16184,
                                "label": "å­ç¥¥å¸å¸æ³å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16183,
                                "label": "å­ç¥¥å¸æ°´å©å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16182,
                                "label": "å­ç¥¥å¸åä¸åæå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16180,
                                "label": "å­ç¥¥å¸æåææ¸¸åä½è²å¹¿çµå±",
                                "ancestor": null,
                                "children": [
                                    {
                                        "id": 16181,
                                        "label": "å­ç¥¥å¸ææ¸¸åå±å±",
                                        "ancestor": null,
                                        "users": null
                                    }
                                ],
                                "users": null
                            },
                            {
                                "id": 16179,
                                "label": "å­ç¥¥å¸å«çå¥åº·å±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16178,
                                "label": "å­ç¥¥å¸åè°å³å£å²¸ç»æµåºç®¡çå§åä¼",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16177,
                                "label": "å­ç¥¥å¸åºæ¥ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16176,
                                "label": "å­ç¥¥å¸å¸åºçç£ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16175,
                                "label": "å­ç¥¥å¸äººæ°æ¿åºæ¿å¡æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16174,
                                "label": "å­ç¥¥å¸åä¹¡ç»¼åæ§æ³ç®¡çå±",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16173,
                                "label": "å­ç¥¥å¸å¾å°æ¬è¿å®ç½®å·¥ä½æå¡ä¸­å¿",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16172,
                                "label": "å­ç¥¥å¸å¤ç³éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16171,
                                "label": "å­ç¥¥å¸åè°éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16170,
                                "label": "å­ç¥¥å¸å­ç¥¥éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            },
                            {
                                "id": 16169,
                                "label": "å­ç¥¥å¸ä¸ç³éäººæ°æ¿åº",
                                "ancestor": null,
                                "users": null
                            }
                        ],
                        "users": null
                    }
                ],
                "users": null
            }
]
class Monitor extends Component {
    state = { dpName:"", mediaType:1, data:[], data2:[], checkVendor:"KPY"} 
    componentDidMount() {
        console.log("获取全部data数据 传给区域");
    }
    componentDidUpdate(oldProps) {
        const { dpName, mediaType } = this.state;
        if (dpName) {
            console.log('获取栏目数据: dpName :>> mediaType ', dpName, mediaType);
        }
    }
    getDanWei = () => {

    }
    render() { 
        const { data2 } = this.state;
        return (
            <div style={ {position: 'relative'} }>
                <div style={ {position: 'absolute', left: 140, right:20, top: 40} }>
                    <MonitorItem title="平台" data={[{id:1, label:"网站"},{id:2, label:"新媒体"}]} en={true} change={(a, b, key) => {this.setState({mediaType: key});}} />
                    <MonitorItem title="区域" data={data} en={true} change={(children) => {this.setState({data2: children})}} />
                    <MonitorItem title="单位" data={data2} en={false} change={(_, label) => {this.setState({dpName: label})}} />
                    <MonitorItem title="栏目" data={[{label:""},{label:""}]} />
                    <MonitorItem title="接口" data={[{label:"KPY"}]} en={true} haben={true} change={(_, label) => {this.setState({checkVendor: label})}} />
                </div>
            </div>
        );
    }
}
 
export default Monitor;