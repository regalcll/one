[custom]

ruleset=Proxy,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Telegram/Telegram.list
ruleset=Proxy,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/YouTube.list
ruleset=Proxy,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/Netflix.list
ruleset=Proxy,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/DisneyPlus.list
ruleset=Proxy,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Streaming.list
ruleset=Proxy,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Amazon/Amazon.list
ruleset=Proxy,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Global.list
ruleset=DIRECT,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.list
ruleset=DIRECT,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Unbreak.list
ruleset=DIRECT,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/Apple.list
ruleset=DIRECT,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/China.list
ruleset=DIRECT,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/ChinaASN/ChinaASN.list
ruleset=DIRECT,[]GEOIP,CN
ruleset=Proxy,[]MATCH

custom_proxy_group=Proxy`fallback`港|HK|Hong`http://www.gstatic.com/generate_204`300,,50

enable_rule_generator=true
overwrite_original_rules=true
