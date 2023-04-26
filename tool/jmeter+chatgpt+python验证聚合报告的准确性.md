---
title: 验证聚合报告的准确性
description: jmeter + chatgpt + python 验证聚合报告的准确性
sidebar_position: 2
last_update:
  author: 郑学贤
---

# 验证聚合报告的准确性

## jmeter

用jmeter新建一个http请求，我这里是用一个登录请求（大家可以直接用百度请求https://www.baidu.com/来进行验证和学习）

![](@site/static/img/test_img/2023-04-26-18-22-57.png)

登录的请求下面，添加BeanShell 后置处理程序，在输入框中输入下面内容：

```
log.info(prev.getStartTime().toString());
log.info(prev.getEndTime().toString());
rst=prev.getEndTime()-prev.getStartTime();
log.info("时间差${num}："+rst);
```

比如执行400次压测，得到的压测结果如下

![](@site/static/img/test_img/2023-04-26-18-29-59.png)

输出的日志在jmeter的bin目录下的jmeter.log中，内容如下：

![](@site/static/img/test_img/2023-04-26-18-42-15.png)

![](@site/static/img/test_img/2023-04-26-18-32-33.png)

现在需要把输出的响应时间提取出来，思路是先把包含：时间差的行提取出来，用python脚本来编写

- 2023-04-26 16:08:37,874 INFO o.a.j.u.BeanShellTestElement: 时间差15：173
- 2023-04-26 16:08:37,874 INFO o.a.j.u.BeanShellTestElement: 时间差13：212
- 2023-04-26 16:08:37,874 INFO o.a.j.u.BeanShellTestElement: 时间差6：248

## chatgpt

脚本的编写，用chatgpt来进行，可以快速输出脚本
![](@site/static/img/test_img/2023-04-26-18-36-28.png)

![](@site/static/img/test_img/2023-04-26-18-37-50.png)

数据存储在列表中，还需要对列表进行排序

![](@site/static/img/test_img/2023-04-26-18-44-02.png)

需求是验证聚合报告的响应时间，就以中位数、95% 、99%的响应时间来举例，调整后的脚本如下：

```
# _*_ coding:utf-8 _*_
import sys

def extract_lines_with_keyword(input_file, output_file, keyword):
    line_l = []
    with open(input_file, 'r', encoding="utf_8") as old_file:
        with open(output_file, 'w', encoding="utf_8") as new_file:
            for line in old_file:
                if keyword in line:
                    new_line = line.split("：")[-1].split("\n")[0]
                    line_l.append(int(new_line))
            new_file.write("排序前的值：")
            new_file.write("\n\n")
            new_file.write(str(line_l))
            new_file.write("\n\n")
            new_file.write("排序后的值：")
            line_l.sort()
            new_file.write(str(line_l))
            p_95 = int(400 *  0.95)
            print("中位数的响应时间：" + str(line_l[int(len(line_l)/2) - 1]))
            new_file.write("\n\n")
            new_file.write("中位数的响应时间：" +  str(line_l[int(len(line_l)/2) - 1]))
            new_file.write("\n\n")
            print("95%的响应时间：" + str(line_l[p_95 - 1]))
            new_file.write("95%的响应时间：" + str(line_l[p_95 - 1]))
            new_file.write("\n\n")
            print("99%的响应时间：" + str(line_l[int(400 *  0.99 - 1)]))
            new_file.write("99%的响应时间：" + str(line_l[int(400 *  0.99 - 1)]))

if __name__ == '__main__':
    if len(sys.argv) != 4:
        print("使用方法：python test_diff.py  <input_file>  <output_file>  <keyword>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    keyword = sys.argv[3]

    extract_lines_with_keyword(input_file, output_file, keyword)
```

# CMD 执行输出结果

把jmeter.log、test_diff.py、new.txt文档放在一个文件夹下面，然后进入该文件夹（也可以用绝对路径）

![](@site/static/img/test_img/2023-04-26-18-48-22.png)

执行命令：

```
python  test_diff.py  "jmeter.log"  "new.txt"  "时间差"
```

执行结果：

![](@site/static/img/test_img/2023-04-26-18-45-42.png)

new.txt中的结果：

![](@site/static/img/test_img/2023-04-26-18-50-14.png)





