// 参考 Verge 示例 Script 配置
//
// Clash Verg Rev Version ≥ 1.7.2
//
// 最后更新时间: 2024-07-05 18:05

// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "text",
  "interval": 86400
};

// 策略组通用配置
const groupBaseOption = {
  "interval": 300,
  "url": "http://latency-test.skk.moe/endpoint",
  "max-failed-times": 3,
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖通用配置
  config["mixed-port"] = "7893";
  config["tcp-concurrent"] = true;
  config["allow-lan"] = true;
  config["ipv6"] = false;
  config["mode"] = "rule";
  config["log-level"] = "info";
  config["find-process-mode"] = "strict";
  config["global-client-fingerprint"] = "chrome";

  // 覆盖 dns 配置
  config["dns"] = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": true,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter":[
      "*.lan",
      "*.direct",
      "cable.auth.com",
      "*.msftconnecttest.com",
      "*.msftncsi.com",
      "network-test.debian.org",
      "detectportal.firefox.com",
      "resolver1.opendns.com",
      "*.srv.nintendo.net",
      "*.stun.playstation.net",
      "xbox.*.microsoft.com",
      "*.xboxlive.com",
      "stun.*",
      "global.turn.twilio.com",
      "global.stun.twilio.com",
      "app.yinxiang.com",
      "injections.adguard.org",
      "local.adguard.org",
      "cable.auth.com",
      "localhost.*.qq.com",
      "localhost.*.weixin.qq.com",
      "*.logon.battlenet.com.cn",
      "*.logon.battle.net",
      "*.blzstatic.cn",
      "music.163.com",
      "*.music.163.com",
      "*.126.net",
      "musicapi.taihe.com",
      "music.taihe.com",
      "songsearch.kugou.com",
      "trackercdn.kugou.com",
      "*.kuwo.cn",
      "api-jooxtt.sanook.com",
      "api.joox.com",
      "joox.com",
      "y.qq.com",
      "*.y.qq.com",
      "streamoc.music.tc.qq.com",
      "mobileoc.music.tc.qq.com",
      "isure.stream.qqmusic.qq.com",
      "dl.stream.qqmusic.qq.com",
      "aqqmusic.tc.qq.com",
      "amobile.music.tc.qq.com",
      "*.xiami.com",
      "*.music.migu.cn",
      "music.migu.cn",
      "proxy.golang.org",
      "*.mcdn.bilivideo.cn",
      "*.cmpassport.com",
      "id6.me",
      "open.e.189.cn",
      "mdn.open.wo.cn",
      "opencloud.wostore.cn",
      "auth.wosms.cn",
      "*.jegotrip.com.cn",
      "*.icitymobile.mobi",
      "*.pingan.com.cn",
      "*.cmbchina.com",
      "*.10099.com.cn",
      "pool.ntp.org",
      "*.pool.ntp.org",
      "ntp.*.com",
      "time.*.com",
      "ntp?.*.com",
      "time?.*.com",
      "time.*.gov",
      "time.*.edu.cn",
      "*.ntp.org.cn",
      "PDC._msDCS.*.*",
      "DC._msDCS.*.*",
      "GC._msDCS.*.*"
    ],
    "default-nameserver": ["223.5.5.5", "119.29.29.29"],
    "nameserver": ["223.5.5.5", "119.29.29.29"],
    "nameserver-policy":{
      "geosite:cn": "system",
      "geosite:gfw,geolocation-!cn": ["quic://223.5.5.5", "quic://223.6.6.6", "https://1.12.12.12/dns-query", "https://120.53.53.53/dns-query"]
    }
  };

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
    "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    "mmdb": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb"
  };

  // 覆盖 sniffer 配置
  config["sniffer"] = {
    "enable": true,
    "parse-pure-ip": true,
    "sniff": {
      "TLS": {
        "ports": ["443", "8443"]
      },
      "HTTP": {
        "ports": ["80", "8080-8880"],
        "override-destination": true
      },
      "QUIC": {
        "ports": ["443", "8443"]
      }
    }
  };

  // 覆盖 tun 配置
  config["tun"] = {
    "enable": true,
    "stack": "mixed",
    "dns-hijack": ["any:53"],
    "auto-route": true,
    "auto-detect-interface": true  
  };

  // 覆盖策略组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Proxies",
      "type": "select",
      "proxies": ["HongKong", "Taiwan", "Singapore"],
      "icon": "https://raw.githubusercontent.com/Orz-3/face/master/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["HongKong", "Taiwan", "Singapore"],
      "icon": "https://raw.githubusercontent.com/Orz-3/face/master/Telegram.png"
    },
    {
      ...groupBaseOption,
      "name": "Streaming",
      "type": "select",
      "proxies": ["HongKong", "Taiwan", "Singapore"],
      "icon": "https://raw.githubusercontent.com/Orz-3/face/master/YouTube.png"
    },
    {
      ...groupBaseOption,
      "name": "Emby",
      "type": "select",
      "include-all": true,
      "proxies": ["HongKong", "Taiwan", "Singapore"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Emby.png"
    },
    // 地区分组
    {
      ...groupBaseOption,
      "name": "HongKong",
      "type": "fallback",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/face/master/HK.png"
    },
    {
      ...groupBaseOption,
      "name": "Taiwan",
      "type": "fallback",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇨🇳|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/face/master/TW.png"
    },
    {
      ...groupBaseOption,
      "name": "Singapore",
      "type": "fallback",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/face/master/SG.png"
    }
  ];

  // 覆盖规则集
  config["rule-providers"] = {
    "Apple": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.list",
      "path": "./rule-providers/Apple.list"
    },
    "YouTube": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.list",
      "path": "./rule-providers/YouTube.list"
    },
    "Telegram": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.list",
      "path": "./rule-providers/Telegram.list"
    },
    "Emby": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Emby.list",
      "path": "./rule-providers/Emby.list"
    },
    "Netflix": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Netflix/Netflix.list",
      "path": "./rule-providers/Netflix.list"
    },
    "Disney": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Disney/Disney.list",
      "path": "./rule-providers/Disney.list"
    },
    "Lan": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.list",
      "path": "./rule-providers/Lan.list"
    }
  };

  // 覆盖规则
  config["rules"] = [
    "RULE-SET,Apple,DIRECT",
    "RULE-SET,Telegram,Telegram",
    "RULE-SET,YouTube,Streaming",
    "RULE-SET,Netflix,Streaming",
    "RULE-SET,Disney,Streaming",
    "RULE-SET,Emby,Emby",
    "GEOSITE,gfw,Proxies",
    "GEOSITE,cn,DIRECT",
    "GEOIP,lan,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH,Proxies"
  ];

  // 返回修改后的配置
  return config;
}
