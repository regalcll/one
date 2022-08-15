[custom]

ruleset=YouTube,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/YOUTUBE.list
ruleset=Netflix,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/NETFLIX.list
ruleset=Disney+,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/DisneyPlus.list
ruleset=SpeedTest,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Speedtest/Speedtest.list
ruleset=Telegram,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/LiaoTianRuanJian.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/Emby.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/BaHaMuTe.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/HBO.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/HBO%20MAX.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/TikTok.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/PrimeVideo.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/Spotify.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/RiHanMeiTi.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/GangTaiMeiTI_2.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/GuoWaiMeiTi_2.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/GuoWaiWangZhan.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/WeiRuanFuWu.list
ruleset=Proxy,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/AppleAll.list
ruleset=DIRECT,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/BilibiliHMT.list
ruleset=DIRECT,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/IqiyiHMT.list
ruleset=DIRECT,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/YouXiPingTai.list
ruleset=DIRECT,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/PrivateTracker.list
ruleset=DIRECT,https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/GuoNeiWangZhan.list
ruleset=DIRECT,[]GEOIP,CN
ruleset=Proxy,[]MATCH

custom_proxy_group=Proxy`select`[]Hong Kong`[]Tai Wan`[]Singapore`
custom_proxy_group=Telegram`select`[]Hong Kong`[]Tai Wan`[]Singapore`
custom_proxy_group=YouTube`select`[]Hong Kong`[]Tai Wan`[]Singapore`
custom_proxy_group=Netflix`select`[]Hong Kong`[]Tai Wan`[]Singapore`
custom_proxy_group=Disney+`select`[]Hong Kong`[]Tai Wan`[]Singapore`
custom_proxy_group=SpeedTest`select`[]Hong Kong`[]Tai Wan`[]Singapore`
custom_proxy_group=Hong Kong`fallback`[]HK(Flower)`[]HK(Texon)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=Tai Wan`fallback`[]TW(Flower)`[]TW(Texon)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=Singapore`fallback`[]SG(Flower)`[]SG(Texon)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=HK(Flower)`load-balance`(香港.*?高级)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=HK(Texon)`load-balance`((?=.*(港|HK|(?i)Hong))^((?!(台|日|韩|新|美|实验|标准|高级)).)*$)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=TW(Flower)`load-balance`(台湾.*?高级)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=TW(Texon)`load-balance`((?=.*(台|TW|(?i)Taiwan))^((?!(港|日|韩|新|美|实验|标准|高级)).)*$)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=SG(Flower)`load-balance`(新加坡.*?高级)`http://www.gstatic.com/generate_204`300,,50
custom_proxy_group=SG(Texon)`load-balance`((?=.*(新|狮|獅|SG|(?i)Singapore))^((?!(港|台|日|韩|美|实验|标准|高级)).)*$)`http://www.gstatic.com/generate_204`300,,50

enable_rule_generator=true
overwrite_original_rules=true
