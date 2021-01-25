# Robot-App

## HTTP API


#### AUTH :
#### auth/register POST
        
* Регистрация пользователя
      
* Параметры запроса:      
        
    Название параметра | Описание | Место хранения
    ------------ | ------------- | -------------
    username | Имя пользователя | тело запроса
    password | Пароль | тело запроса
    email | электронная почта | тело запроса
        
#### auth/login POST
     
* Авторизация пользователя

* Параметры запроса:
     
  Название параметра | Описание | Место хранения
  ------------ | ------------- | -------------
  username | Имя пользователя | тело запроса
  password | Пароль | тело запроса
  fingerprint | Уникальная строка соответствующая этому устройству | тело запроса
  User-Agent | Клиентское приложение с которого был выполнен вход | заголовок запроса
             
* Ответ: 
     
    ``` 
    {
        tokens:{
            refreshToken,
            accessToken
            }
    }     
    ```
#### auth/refresh POST
    
* Обновление токенов, после истечения срока службы
   
    Название параметра | Описание | Место хранения
    ------------ | ------------- | -------------
    refreshToken | Имя пользователя | тело запроса
    accessToken | jsonWebToken   | заголовок запроса ( authorization ) 
    fingerprint | Уникальная строка соответствующая этому устройству | тело запроса
    User-Agent | Клиентское приложение с которого был выполнен вход | заголовок запроса
        
    Пример заголовка authorization: 
    ```
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoicml0ZXZpIiwiZW1haWwiOiJyaXRldmlAZ21haWwuY29tIiwiaWF0IjoxNjA0MzU1NTA2LCJleHAiOjE2MDQzNTczMDZ9.5BkgyXFz70I5w1pGaRgd7B3ZcUS5HQVzxdH3IsBj0lw     
    ```  
        
* Ответ:
    ``` 
    {
        tokens:{
            refreshToken,
            accessToken
        }
    }     
    ```

#### auth/verify?location=http://somelocation.com POST

* Проверяет и редиректит запрос на location вместе с телом

  Название параметра | Описание | Место хранения
      ------------ | ------------- | -------------
  location | Адрес редиректа | query
  accessToken | jsonWebToken   | заголовок запроса ( authorization )
  
  Пример заголовка authorization:
    ```
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoicml0ZXZpIiwiZW1haWwiOiJyaXRldmlAZ21haWwuY29tIiwiaWF0IjoxNjA0MzU1NTA2LCJleHAiOjE2MDQzNTczMDZ9.5BkgyXFz70I5w1pGaRgd7B3ZcUS5HQVzxdH3IsBj0lw     
    ```  

* Ответ:
  Такой же как и у места редиректа
     
