// 参考 Verge Rev 示例 Script 配置
//
// Clash Verge Rev (Version ≥ 17.2) & Mihomo-Party (Version ≥ 1.5.10)
//
// 最后更新时间: 2024-12-15 08:00

// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "text",
  "interval": 86400
};

// 策略组通用配置
const groupBaseOption = {
  "interval": 300,
  "url": "http://1.0.0.1/favicon.ico",
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
  config["find-process-mode"] = "strict";
  config["global-client-fingerprint"] = "chrome";

  // 覆盖 dns 配置
  config["dns"] = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["*", "+.lan", "+.local", "+.direct", "+.msftconnecttest.com", "+.msftncsi.com"],
    "nameserver": ["223.5.5.5", "119.29.29.29"]
  };

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
    "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
    "asn": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb"
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
      "include-all": true,
      "icon": "https://github.com/Orz-3/face/raw/master/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "Chat",
      "type": "select",
      "include-all": true,
      "icon": "https://github.com/Orz-3/face/raw/master/Static.png"
    },
    {
      ...groupBaseOption,
      "name": "Media",
      "type": "select",
      "include-all": true,
      "icon": "https://github.com/Orz-3/face/raw/master/YouTube.png"
    }
  ];

  // 覆盖规则集
  config["rule-providers"] = {
    "AD": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Reject.list",
      "path": "./rules/AD.list"
    },
    "Apple": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Apple.list",
      "path": "./rules/Apple.list"
    },
    "Google": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Google.list",
      "path": "./rules/Google.list"
    },
    "YouTube": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/YouTube.list",
      "path": "./rules/YouTube.list"
    },
    "Telegram": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Telegram.list",
      "path": "./rules/Telegram.list"
    },
    "Twitter": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Twitter.list",
      "path": "./rules/Twitter.list"
    },
    "Steam": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Steam.list",
      "path": "./rules/Steam.list"
    },
    "Epic": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Epic.list",
      "path": "./rules/Epic.list"
    },
    "AI": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/AI.list",
      "path": "./rules/AI.list"
    },
    "Emby": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Emby.list",
      "path": "./rules/Emby.list"
    },
    "Spotify": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Spotify.list",
      "path": "./rules/Spotify.list"
    },
    "Bahamut": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Bahamut.list",
      "path": "./rules/Bahamut.list"
    },
    "Netflix": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Netflix.list",
      "path": "./rules/Netflix.list"
    },
    "Disney": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Disney.list",
      "path": "./rules/Disney.list"
    },
    "PrimeVideo": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/PrimeVideo.list",
      "path": "./rules/PrimeVideo.list"
    },
    "HBO": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/HBO.list",
      "path": "./rules/HBO.list"
    },
    "OneDrive": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/OneDrive.list",
      "path": "./rules/OneDrive.list"
    },
    "Github": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Github.list",
      "path": "./rules/Github.list"
    },
    "Microsoft": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Microsoft.list",
      "path": "./rules/Microsoft.list"
    },
    "Lan": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/Lan.list",
      "path": "./rules/Lan.list"
    },
    "ProxyGFW": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://github.com/Repcz/Tool/raw/X/Clash/Rules/ProxyGFW.list",
      "path": "./rules/ProxyGFW.list"
    }
  };

  // 覆盖规则
  config["rules"] = [
    "RULE-SET,AD,REJECT",
    "RULE-SET,AI,Proxy",
    "RULE-SET,Apple,DIRECT",
    "RULE-SET,YouTube,Media",
    "RULE-SET,Google,Proxy",
    "RULE-SET,Telegram,Chat",
    "RULE-SET,Twitter,Proxy",
    "RULE-SET,Steam,DIRECT",
    "RULE-SET,Epic,DIRECT",
    "RULE-SET,Emby,Proxy",
    "RULE-SET,Spotify,Proxy",
    "RULE-SET,Bahamut,Media",
    "RULE-SET,Netflix,Media",
    "RULE-SET,Disney,Media",
    "RULE-SET,PrimeVideo,Media",
    "RULE-SET,HBO,Media",
    "GEOSITE,onedrive,Proxy",
    "GEOSITE,github,Proxy",
    "GEOSITE,microsoft,DIRECT",
    "GEOSITE,gfw,Proxy",
    "GEOIP,private,DIRECT",
    "GEOIP,cn,DIRECT",
    "MATCH,Proxy"
  ];

  // 返回修改后的配置
  return config;
}
