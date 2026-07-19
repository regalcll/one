// 参考 Verge Rev 示例 Script 配置
//
// Clash Verge Rev (Version ≥ 17.2) & Mihomo-Party (Version ≥ 1.5.10)
//
// 最后更新时间: 2026-07-10 00:00


// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "text",
  "interval": 86400
};

// 策略组通用配置
const groupBaseOption = {
  "interval": 300,
  "url": "http://1.1.1.1/generate_204",
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
  config["mixed-port"] = "7890";
  config["tcp-concurrent"] = true;
  config["allow-lan"] = true;
  config["ipv6"] = false;
  config["log-level"] = "info";
  config["unified-delay"] = "true";

  // 覆盖 dns 配置
  config["dns"] = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ['+.lan', '*', '+.local', '+.cmpassport.com', 'id6.me', 'open.e.189.cn', 'mdn.open.wo.cn', 'opencloud.wostore.cn', 'auth.wosms.cn', '+.10099.com.cn', '+.msftconnecttest.com', '+.msftncsi.com', 'lancache.steamcontent.com'],
    "nameserver": ["223.5.5.5", "119.29.29.29"]
  };

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/geoip.dat",
    "geosite": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@releases/download/latest/geosite.dat",
    "mmdb": "https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/Country.mmdb",
    "asn": "https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/GeoLite2-ASN.mmdb"
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
    "dns-hijack": ["any:53"]
  };

  // 覆盖策略组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Proxy",
      "type": "select",
      "proxies": ["HongKong", "Singapore", "Japan", "TaiWan"]
    },
    {
      ...groupBaseOption,
      "name": "Chat",
      "type": "select",
      "proxies": ["HongKong", "Singapore", "Japan", "TaiWan"]
    },
    {
      ...groupBaseOption,
      "name": "Crypto",
      "type": "select",
      "proxies": ["HongKong", "Singapore", "Japan", "TaiWan"]
    },
    {
      ...groupBaseOption,
      "name": "Emby",
      "type": "select",
      "include-all": true,
      "proxies": ["HongKong", "Singapore", "Japan", "TaiWan"]
    },
    // 地区分组
    {
      ...groupBaseOption,
      "name": "HongKong",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)"
    },
    {
      ...groupBaseOption,
      "name": "Singapore",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(🇸🇬)|(新)|(Singapore)|(SG)"
    },
    {
      ...groupBaseOption,
      "name": "Japan",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)"
    },
    {
      ...groupBaseOption,
      "name": "TaiWan",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(🇨🇳)|(台)|(Tai)|(TW)"
    } 
  ];

  // 覆盖规则集
  config["rule-providers"] = {
    "Direct": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@refs/heads/X/mihomo/Rules/Direct.list"
    },
    "Lan": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@refs/heads/X/mihomo/Rules/Lan.list"
    },
    "Reject": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@X/mihomo/Rules/Reject.list"
    },
    "Crypto": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@refs/heads/X/mihomo/Rules/Crypto.list"
    },
    "Crypto1": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@refs/heads/master/rule/Clash/Crypto/Crypto.list"
    },
    "Emby": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@X/mihomo/Rules/Emby.list"
    },
    "Emby1": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/regalcll/one@refs/heads/master/Emby1.list"
    },
    "Telegram": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@refs/heads/X/mihomo/Rules/Telegram.list"
    },
    "Proxy": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://cdn.jsdelivr.net/gh/Repcz/Tool@X/mihomo/Rules/Proxy.list"
    }
  };

  // 覆盖规则
  config["rules"] = [
    "RULE-SET,Direct,DIRECT",
    "RULE-SET,Reject,REJECT",
    "RULE-SET,Telegram,Chat",
    "RULE-SET,Crypto,Crypto",
    "RULE-SET,Crypto1,Crypto",
    "RULE-SET,Emby,Emby",
    "RULE-SET,Emby1,Emby",
    "RULE-SET,Proxy,Proxy",
    "RULE-SET,Lan,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH,Proxy"
  ];

  // 返回修改后的配置
  return config;
} 
