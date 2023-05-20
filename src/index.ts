import joplin from 'api';
import { SettingItemType, ToolbarButtonLocation } from 'api/types';
const request = require('request');

joplin.plugins.register({
    onStart: async function () {
        await joplin.settings.registerSettings({
            'city': {
                label: 'city',
                // label: translate('user'),
                value: 'Beijing,Shunyi',
                type: SettingItemType.String,
                section: 'joplin-weather',
                public: true,
                description: 'city_description',
                // description: translate('user_description'),
            },
            'apiKey': {
                label: 'apiKey',
                // label: translate('pass'),
                value: '612e5685876a8aacef7448fc9a1dc8af',
                type: SettingItemType.String,
                section: 'joplin-weather',
                public: true,
                secure: true,
                // description: translate('pass_description'),
                description: 'apiKey_description',
            },
            'units': {
                label: 'units',
                // label: translate('units'),
                value: 'metric',
                type: SettingItemType.String,
                isEnum: true,
                options: {
                    "standard": "standard",
                    "imperial": "imperial",
                    "metric": "metric"
                },
                section: 'joplin-weather',
                public: true,
                // description: translate('pass_description'),
                description: 'units_description',
            },
            'lat': {
                label: '纬度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '纬度(lat): xxx',
            },
            'lon': {
                label: '经度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '经度(lon): xxx',
            },
            'timezone': {
                label: '时区名称',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '时区名称(timezone): xxx',
            },
            'timezone_offset': {
                label: 'UTC 时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '从 UTC 转换的时间(timezone_offset): xxx',
            },
            'current_dt': {
                label: '当前时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '当前时间(current.dt): xxx',
            },
            'current_sunrise': {
                label: '日出时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '日出时间(current.sunrise): xxx',
            },
            'current_sunset': {
                label: '日落时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '日落时间(current.sunset): xxx',
            },
            'current_temp': {
                label: '温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '温度(current.temp): xxx',
            },
            'current_feels_like': {
                label: '体感温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '体感温度(current.feels_like): xxx',
            },
            'current_pressure': {
                label: '气压',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '海平面大气压力(current.pressure): xxx hPa',
            },
            'current_humidity': {
                label: '湿度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '湿度(current.humidity): xxx%',
            },
            'current_dew_point': {
                label: '大气温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '大气温度（根据压力和湿度而变化），低于该温度的水滴开始凝结并形成露水。(current.dew_point): xxx',
            },
            'current_clouds': {
                label: '云量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '混浊度(current.clouds): xxx%',
            },
            'current_uvi': {
                label: '紫外线指数',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '紫外线指数(current.uvi): xxx',
            },
            'current_visibility': {
                label: '能见度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '平均能见度(current.visibility): xxx 米',
            },
            'current_wind_speed': {
                label: '风速',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '风速(current.wind_speed): xxx 米/秒',
            },
            'current_wind_gust': {
                label: '阵风',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '阵风(current.wind_gust): xxx 米/秒',
            },
            'current_wind_deg': {
                label: '风向',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '风向(current.wind_deg): xxx',
            },
            'current_rain_1h': {
                label: '每小时降水量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降水量(current.rain.1h): xxx 毫米/小时',
            },
            'current_snow_1h': {
                label: '每小时降雪量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降雪量(current.snow.1h): xxx 毫米/小时',
            },
            'current_weather_id': {
                label: '天气状况编号',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气状况编号(current.weather.id): xxx',
            },
            'current_weather_main': {
                label: '天气参数组',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气参数组(current.weather.main): xxx',
            },
            'current_weather_description': {
                label: '天气状况',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气状况(current.weather.description): xxx',
            },
            'current_weather_icon': {
                label: '天气图标 ID',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气图标 ID(current.weather.icon): xxx',
            },
            'minutely_dt': {
                label: '分钟级预报时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '预测数据的时间(minutely.dt): xxx',
            },
            'minutely_precipitation': {
                label: '分钟级降水量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降水量(minutely.precipitation): xxx 毫米/小时',
            },
            'hourly_dt': {
                label: '每小时预报时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '预测数据的时间(hourly.dt): xxx',
            },
            'hourly_temp': {
                label: '每小时温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '温度(hourly.temp): xxx',
            },
            'hourly_feels_like': {
                label: '每小时体感温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '体感温度(hourly.feels_like): xxx',
            },
            'hourly_pressure': {
                label: '每小时气压',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '海平面大气压力(hourly.pressure): xxx hPa',
            },
            'hourly_humidity': {
                label: '每小时湿度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '湿度(hourly.humidity): xxx%',
            },
            'hourly_dew_point': {
                label: '每小时大气温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '大气温度(hourly.dew_point): xxx',
            },
            'hourly_clouds': {
                label: '每小时云量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '混浊度(hourly.clouds): xxx%',
            },
            'hourly_uvi': {
                label: '每小时紫外线指数',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '紫外线指数(hourly.uvi): xxx',
            },
            'hourly_visibility': {
                label: '每小时能见度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '平均能见度(hourly.visibility): xxx 米',
            },
            'hourly_wind_speed': {
                label: '每小时风速',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '风速(hourly.wind_speed): xxx 米/秒',
            },
            'hourly_wind_gust': {
                label: '每小时阵风',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '阵风(hourly.wind_gust): xxx 米/秒',
            },
            'hourly_wind_deg': {
                label: '每小时风向',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '风向(hourly.wind_deg): xxx',
            },
            'hourly_pop': {
                label: '每小时降水概率',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降水概率(hourly.pop): xxx',
            },
            'hourly_rain_1h': {
                label: '每小时降水量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降水量(hourly.rain.1h): xxx 毫米/小时',
            },
            'hourly_snow_1h': {
                label: '每小时降雪量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降雪量(hourly.snow.1h): xxx 毫米/小时',
            },
            'hourly_weather_id': {
                label: '天气状况编号',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气状况编号(hourly.weather.id): xxx',
            },
            'hourly_weather_main': {
                label: '天气参数组',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气参数组(hourly.weather.main): xxx',
            },
            'hourly_weather_description': {
                label: '天气状况',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气状况(hourly.weather.description): xxx',
            },
            'hourly_weather_icon': {
                label: '天气图标 ID',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气图标 ID(hourly.weather.icon): xxx',
            },
            'daily_dt': {
                label: '每日预报时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '预测数据的时间(daily.dt): xxx',
            },
            'daily_sunrise': {
                label: '每日日出时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '日出时间(daily.sunrise): xxx',
            },
            'daily_sunset': {
                label: '每日日落时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '日落时间(daily.sunset): xxx',
            },
            'daily_moonrise': {
                label: '每日月升时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '月亮升起的时间(daily.moonrise): xxx',
            },
            'daily_moonset': {
                label: '每日月落时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '月亮落下的时间(daily.moonset): xxx',
            },
            'daily_moon_phase': {
                label: '月相',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '月相(daily.moon_phase): xxx',
            },
            'daily_temp_morn': {
                label: '早晨温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '早晨温度(daily.temp.morn): xxx',
            },
            'daily_temp_day': {
                label: '日温',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '日温(daily.temp.day): xxx',
            },
            'daily_temp_eve': {
                label: '晚上温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '晚上温度(daily.temp.eve): xxx',
            },
            'daily_temp_night': {
                label: '夜间温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '夜间温度(daily.temp.night): xxx',
            },
            'daily_temp_min': {
                label: '每日最低温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '每日最低温度(daily.temp.min): xxx',
            },
            'daily_temp_max': {
                label: '每日最高温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '每日最高温度(daily.temp.max): xxx',
            },
            'daily_feels_like_morn': {
                label: '早晨温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '早晨温度(daily.feels_like.morn): xxx °C',
            },
            'daily_feels_like_day': {
                label: '日温',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '日温(daily.feels_like.day): xxx °C',
            },
            'daily_feels_like_eve': {
                label: '晚上温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '晚上温度(daily.feels_like.eve): xxx °C',
            },
            'daily_feels_like_night': {
                label: '夜间温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '夜间温度(daily.feels_like.night): xxx °C',
            },
            'daily_pressure': {
                label: '大气压力',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '每小时海平面大气压力(daily.pressure): xxx hPa',
            },
            'daily_humidity': {
                label: '湿度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '湿度(daily.humidity): xxx%',
            },
            'daily_dew_point': {
                label: '大气温度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '大气温度（根据压力和湿度而变化），低于该温度的水滴开始凝结并形成露水。(daily.dew_point): xxx',
            },
            'daily_wind_speed': {
                label: '风速',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '风速(daily.wind_speed): xxx 米/秒',
            },
            'daily_wind_gust': {
                label: '阵风',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '阵风(daily.wind_gust): xxx 米/秒',
            },
            'daily_wind_deg': {
                label: '风向',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '风向(daily.wind_deg): xxx',
            },
            'daily_clouds': {
                label: '混浊度',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '混浊度(daily.clouds): xxx%',
            },
            'daily_uvi': {
                label: '紫外线指数最大值',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '紫外线指数最大值(daily.uvi): xxx',
            },
            'daily_pop': {
                label: '降水概率',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降水概率(daily.pop): xxx',
            },
            'daily_rain': {
                label: '降水量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '降水量(daily.rain): xxx 毫米',
            },
            'daily_snow': {
                label: '雪量',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '雪量(daily.snow): xxx 毫米',
            },
            'daily_weather_id': {
                label: '天气状况编号',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气状况编号(daily.weather.id): xxx',
            },
            'daily_weather_main': {
                label: '天气参数组',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气参数组(daily.weather.main): xxx',
            },
            'daily_weather_description': {
                label: '天气状况',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气状况(daily.weather.description): xxx',
            },
            'daily_weather_icon': {
                label: '天气图标 ID',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '天气图标 ID(daily.weather.icon): xxx',
            },
            'alerts_sender_name': {
                label: '警报源的名称',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '警报源的名称(alerts.sender_name): xxx',
            },
            'alerts_event': {
                label: '警报事件名称',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '警报事件名称(alerts.event): xxx',
            },
            'alerts_start': {
                label: '警报开始的日期和时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '警报开始的日期和时间(alerts.start): xxx',
            },
            'alerts_end': {
                label: '警报结束的日期和时间',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '警报结束的日期和时间(alerts.end): xxx',
            },
            'alerts_description': {
                label: '警报的说明',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '警报的说明(alerts.description): xxx',
            },
            'alerts_tags': {
                label: '恶劣天气的类型',
                value: false,
                type: SettingItemType.Bool,
                section: 'joplin-weather',
                public: true,
                description: '恶劣天气的类型(alerts.tags): xxx',
            },
        });

        await joplin.settings.registerSection("joplin-weather", {
            // label: translate('noteEmail'),
            label: 'weather',
            iconName: "fas fa-sun",
        });

        joplin.commands.register({
            name: 'weather',
            iconName: 'fas fa-sun',
            execute: async () => {
                updateStatusBarPanel();
            }
        });


        const PANELS = joplin.views.panels;

        // prepare panel object
        const panel = await PANELS.create('joplin-weather');
        await PANELS.addScript(panel, './webview.css');

        // update HTML content
        async function updateStatusBarPanel() {
            // update status bar panel
            await PANELS.setHtml(panel, `
				  <div class="container">
						<div style="padding-right: 4px">
                            ${await getWeather(await joplin.settings.value("city"), await joplin.settings.value("apiKey"), await joplin.settings.value("units"), await joplin.settings.globalValue("locale"))}
						</div>
					</div>
				`);
        }

        updateStatusBarPanel();
        // 监听设置更改事件
        await joplin.settings.onChange(async () => {
            updateStatusBarPanel();
        });

        // 工具栏按钮
        await joplin.views.toolbarButtons.create(
            "weather-button",
            "weather",
            ToolbarButtonLocation.EditorToolbar
        );
    }
});

//获取天气
async function getWeather(city: string, apiKey: string, units: string, local: string): Promise<string> {
    return new Promise((resolve, reject) => {
        var options = {
            'method': 'GET',
            'url': `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${local}`,
            'headers': {
            }
        };
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                console.log("url: ", options.url);

                const data = JSON.parse(body);
                console.log("data: ", data);

                const weatherInfo = data.weather[0]; // 访问返回的天气信息

                // 解析天气信息
                // 根据 units 参数选择温度和速度单位
                let tempUnit, speedUnit;
                switch (units) {
                    case 'metric':
                        tempUnit = '°C';
                        speedUnit = 'm/s';
                        break;
                    case 'imperial':
                        tempUnit = '°F';
                        speedUnit = 'mph';
                        break;
                    case 'standard':
                        tempUnit = 'K';
                        speedUnit = 'm/s';
                        break;
                }

                // 构造天气信息的字符串
                const weather = `天气：${weatherInfo.description}，温度：${data.main.temp}${tempUnit}，湿度：${data.main.humidity}%，风速：${data.wind.speed}${speedUnit}`;
                console.log("weather: ", weather);


                // 获取天气图标代码
                let iconCode;
                switch (weatherInfo.icon) {
                    case '01d':
                        iconCode = '<i class="fas fa-sun"></i>';
                        break;
                    case '01n':
                        iconCode = '<i class="fas fa-moon"></i>';
                        break;
                    case '02d':
                        iconCode = '<i class="fas fa-cloud-sun"></i>';
                        break;
                    case '02n':
                        iconCode = '<i class="fas fa-cloud-moon"></i>';
                        break;
                    case '03d':
                    case '03n':
                        iconCode = '<i class="fas fa-cloud"></i>';
                        break;
                    case '04d':
                    case '04n':
                        iconCode = '<i class="fas fa-cloud-showers-heavy"></i>';
                        break;
                    case '09d':
                    case '09n':
                        iconCode = '<i class="fas fa-cloud-rain"></i>';
                        break;
                    case '10d':
                        iconCode = '<i class="fas fa-cloud-sun-rain"></i>';
                        break;
                    case '10n':
                        iconCode = '<i class="fas fa-cloud-moon-rain"></i>';
                        break;
                    case '11d':
                    case '11n':
                        iconCode = '<i class="fas fa-bolt"></i>';
                        break;
                    case '13d':
                    case '13n':
                        iconCode = '<i class="fas fa-snowflake"></i>';
                        break;
                    case '50d':
                    case '50n':
                        iconCode = '<i class="fas fa-smog"></i>';
                        break;
                    default:
                        iconCode = '<i class="fas fa-question"></i>'; // 处理未知天气图标
                        break;
                }

                // 获取当前时间并格式化为字符串
                const now = new Date();
                now.setTime(data.dt * 1000);
                const updated = `<span>，更新时间：${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}</span>`;

                // 将天气信息、天气图标和更新时间合并到一个字符串中
                const result = `<div class="weather-container">${iconCode}<span>${weather}</span>${updated}</div>`;
                resolve(result);
            }
        });
    });
}