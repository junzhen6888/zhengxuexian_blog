---
title: tomcat性能配置
description: 服务端并发容量上不去
sidebar_position: 4
last_update:
  author: 郑学贤
---

# tomcat性能配置

## tomcat的默认配置

修改Spring Boot内嵌Tomcat默认配置（spring-configuration-metadata.json ）

server.tomcat.accept-count:等待队列长度，默认100 

server.tomcat.max-connections:最大可被连接数，默认10000 

server.tomcat.max-threads:最大工作线程数，默认200 

server.tomcat.min-spare-threads:最小工作线程数，默认10

## 压测过程中常见现象

默认配置下，链接超10000后出现拒绝链接情况

默认配置下，发出的请求超过 200 + 100 后拒绝处理

## 建议配置

server.tomcat.accept-count: 1000

server.tomcat.max-connections: 10000 

server.tomcat.max-threads: 800

server.tomcat.min-spare-threads: 10000

对4核8G的服务器来说，经验上最好的max-threads是800

## 定制化内嵌Tomcat配置定制化内嵌Tomcat配置

```
@Component
public class WebServerConfiguration implements WebServerFactoryCustomizer<ConfigurableWebServerFactory> {
    @Override
    public void customize(ConfigurableWebServerFactory configurableWebServerFactory) {
         //使用对应工厂类提供给我们的接口定制化我们的tomcat connector
        ((TomcatServletWebServerFactory)configurableWebServerFactory).addConnectorCustomizers(new TomcatConnectorCustomizer() {
            @Override
            public void customize(Connector connector) {
                Http11NioProtocol protocol = (Http11NioProtocol) connector.getProtocolHandler();
                //定制化keepalivetimeout(设置30秒内没有请求则服务端自动断开keepalive链接)
                protocol.setKeepAliveTimeout(30000);
                //当客户端发送超过10000个请求则自动断开keepalive链接
                protocol.setMaxKeepAliveRequests(10000);
            }
        });
    }
}
```

说明：

keepAliveTimeOut：多少毫秒后不响应就断开keepAlive

maxKeepAliveRequests：多少次请求后keepAlive断开失效

KeepAlive ：建立长连接，保护系统不受客户端连接的拖累，减少网络消耗