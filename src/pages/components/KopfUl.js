import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
/**
 * 头部无序表组件
 * 
 * @author wuzhi
 */

const list = [
    {
        name: '任务中心',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAABpElEQVRIie2WvUscQRiHn9PTWshHo8QmRYhFmqAEFU0ZAgYhAZvINbZpArG0D4FA/gIRBNHWIrGxMDYR2xAtBLWJFvkghyER8siY0WyS23PP47ZQfzC7s++87zw7O+/MbEEdA54BTeSjpSLwALieEzDoUjHxMAIsNBj4KVyS0DLwucHQQ+U1j2cT2g6sAG/ygt4AloHbQEu90GZgCvgKdKf49ABvgc64CoZSe1Pn/a37KhVKszrjH22ql//xu6eWo8e02prSV9CXk6BFdTa276rLsf5abYo+j9Wf0f5SLaQAM0Fb1LnYtqN2qVfU7WibUJ+qv2IZrwLLDH0R7R/Vmwl7r/ojgoL21VIG4DG0WiKtAe+Au8D7hD1k5zhQAPaAYWAyY0JmTqRKJczbqHqrhpjjkRYzvFfFd41L6FQ6P3tv8vOWgP68oN9i/WEeQOB7yMKrwECNgX3Ak7jXvqox9kMY6S4wV2Pg0QmydYrYiz+HxqrajtQB3Elp64n3a8CjFJ8NYLVSw+HZl6JFYLCOIe8DbfFQ+EvVRvocWK8DGk6p/4AAB14iEt4vJilwAAAAAElFTkSuQmCC',
        key: '/taskCenter'
    },
    {
        name: '发起监测',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACfklEQVRIib2XO2gUURSG/2yyYh5IFIxGxKBoIQohahHURlQiGh+FCHbaiCCYJgh2gjY+0lgIPjo7QYOF2oiQ4LMQLMToIoigGItgECNqEj+5+C+OcWZndrPmh8PM3nvnfOe+zr1bAyhFHZK2S1onabGkGkmjkoYkDUq6LWkszck/CuAYywEHgQLp+gz0AXMTfMVaXOES4L5xP4F7QA+wFlhkwDJgD3DZ4KCPwI5KwauBD3b0EOjM4GQecN5BTgJHygWHnr439AKQjwRzFliR4mwv8MUB7M8KDotswNBz/Jnnk8C4y3sy9KQLmHAAy7OAD9j5I6DWds1lI8BRl2WZv2P+7mYaOPT2pRuvd8Up/x4C2spZrUCdvwtqLwXudKO7Llzp4R1NG64Sdtg++5La5CR1eW9f97NXUp2kE5Jel50Yfqs/pAhJW0slkH5H1+F5DHP6FWissLdFe+uRyyf1uMUxvPPzjaQrFaXBvzXskWuJqwwVeb+PS5p0Tq6GvtlHbZyvnBN+0MIqAYtq9XMkCfzC72uqCJ0tqc3TFztlOR9tQd1VBG+RNEvSQGILoAH4BIwBrdNcyUW75Z2yKy1lnnbDS1WAbravgvN9SXAzMOyTZfc0oPO9f4N2puXqom3zyTLmqMuFLgCeZh25qQWH3OsfwHEn/CzQTZGeBj0A5pQDDrYvcp0p+BxeGtOuHuiOLKSgi5FzvSQ8KaJwp7rh3hcVbidPfIo9B75H6l5F7luNWeBpQ7gKOAM888FR1ISH9qoX0dTVG+CDpeDlLqBm7/XEbZIVXum2yWqJ8P8NDtYUB58JcBy8Ict/p2qpSdIdSRslbZhJcFC9pHZJj38BxrkEjAm5mvYAAAAASUVORK5CYII=',
        key: '/monitor'
    },
    {
        name: '数据查询',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAB+UlEQVRIic2XT0hUURTGfzNMpBJqgm6KaSFuRXQhFOJGwm1ShEPgWpe5LFeCEWi1yYXujExQcBdIELSIMQla1iYQgggycmFK6swnF86LN4+Z17x5z9EPLvfdf+d75/Kdc95D0l1Jh6ofFiWRBnqAC9QP/Y4p7aObAFKn2K75XUvX0dMSnBlxJmTtEtARwVYR+AYU4hA3A9vA5QjEDivAaBziv8AW0BWBVMCnajeHEQ9HII2McymuqGgAhoBO4CfwxnoP+ya8P2HEjUAeyFZYL1jCWbXxILAU2H8APACe2ngHGAB+hBGnTdGVVO2Im+y5G3ht4w/Ae+AqMAI8MQ8XbG/+nwVJj6w8jLvkXUNbt/PPJKV8529JKkr6Jeli0G4S4roJHAFTFlIe1oFNoA3oK3elcZAxPbjw2ytj57f1jUkTHwNfLL0OBdacPq7bLXxOmtjhufWvgHtAu6n3LdBqGfB78JBf1b3AnQiEBTM+D9ywHP2izD5X+CeBuZJZSTMxPnrmTaVOzTlJG5K+Svoo6aGkMUlHtnfSr+qMBf6VcgIIQdY8afHeH1i2FsS+zc/a/JzncS0tZ168rPLsbZ/n95OK42qwZhpwUfDYaSvJIvE/rFnRcGF2XE9ih3few5nV4zBBTMf8t3AhVdF+2FW7cubl2lqwW/EQcAL5flE7RltMBgAAAABJRU5ErkJggg==',
        key: '/searchData'
    },
    {
        name: '数据统计',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACt0lEQVRIib2Xy0sVcRTHP9dE8gEFWRRalNUmbZEQ1OJGixBxIW1KapHQon+gFoUQQtAyclGLiCCiRVJCFKFG0K4ga2FgDympoIdgRppWpN84cobG233MjF6/cJg7d8453/k9zpnvLyWJBaAKKAMmgd9x05TE9N8EtAEr/H4YGAOm/PdV4CBQHimbjbyAlUk6Jump/uGExxg+SLojaST0fExSp6SqfLkLEbdIGvaEU5JuSjoqqTJEfjfkv9Ff7F3oxZrikpdK6gqRnpe0NotfJnlg5ZI6JE1ImpF0Mir5Mkk3PPFzSQ15ZiYXeWD1kt64X2cU8ivubOtYUWBZCpGbVUsadN8j+cjb3emBb7RCeyIKuVmdpFFJk5I2ZyOvkfRN0idJayIkjENu1uz+t7ORX/KHhyImi0uOE89KagyT27pMS3otqaSI5Ls85rLdBx2uFVgOnANmY3a9OHgMvAL2W3cNyPdZswN6ikgcoA9YBWwPyNPem0eXgHzAr9tKfbprgfsJk60DDsTw3+rXmtLQF+pzAuKfQCPQnSA2ZeR/EgQGSPtnNi5mgH4jn/Cb6gRJBkJrGBUrgUoTICWuQEaAhgXMQBzcAoZs2oPdbvW3HqhbAvILwJm50vbO0+ad51SMbpXEUuGYQECa5voITHsp/CjSqB8B40ALIQFppF1es8eLRGx44jaHsHQ2GfzSd+NO4MUiklpVVQDf5/2bsW5NrrlMNK5exLXudjExT6Bk6vZ+oAPYAjz0ClgM3AOu/3ewyPGmp33329u2JhztXkln88mxfMGHXfoa+iTtySyVHLZbUo/H/ZJUm8u30FltA9AJtHtlvAV6gWfAe+Crt0rz2wE026fSY3u9coZyZo84haa/L0r6EjoSZcO4pGuS0lHyxj2lpnxk9b4ZrYTskGiHxUEfZTQZBvwF+sa6noeJNPAAAAAASUVORK5CYII=',
        key: '/countData'
    },
    {
        name: '词库管理',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABXElEQVRIidXWwUoWYRTG8Z/6GYS6NTcuhFASEnIRBCLt9RoEd96AK3cuvIPChd1CuXFhq0B3gVcRBCV+gSkfoZw4McYko+LMfEgPHJg5DM//MM/M+74iImsqIvYjohfN9DUiFgrPPzUQEUP4jCd4hzP1tYZPWL1y6GAOL7CMvQbmCo9H5cYgRorrsYbmleqUmjtYwnkDv6eYwDY+4n1msIADfMGvFoYexTgCi4rUU8/L6TeoHHqz8FwfbGHi68rJt3CBoX4AUr2rz71fgL/qVPTeYLqm3ylW8PM2wA90awLS+LLcqAJs1DSv1INk8LpBBsf4UHyqNwLe4llNQK4Ek/h2G2AejxsA/lnuqwC9olpR30OuAhwVIVVV9777RtUr2sTMDc+flP/SuoDd+xjcpQfJ4P8CdEqb/Oz1I0dD5XnrLPfPYRziZYvmqe+5KiQgb3LyV0hYG0rTI3R/Ayy+5uAecZIfAAAAAElFTkSuQmCC',
        key: '/library'
    }
];
const KopfUl = () => {
    const { pathname } = useLocation();
    const nav = useNavigate();
    const go = (path, b) => {
        if (!b) {
            if (path === '/taskCenter') {
                nav('/taskCenter/eins');
            } else {
                nav(path);
            }
        }
    }
    return (
        <ul>
            {list.map((item, key) => {
                var newKey = item.key;
                var b = pathname.match(item.key);
                if (item.key === '/searchData' || item.key === '/monitor') {
                    newKey = "/choose" + newKey;
                }
                return <li key={key} onClick={() =>  go(newKey, b) }
                    style={b ? {backgroundColor: '#39CE39'} : {cursor: 'pointer'}}>
                    <div>
                        <img src={item.icon} alt=""></img>
                    </div>
                    <span>{item.name}</span>
                </li>
            })}
        </ul>
    );
}

export default KopfUl;