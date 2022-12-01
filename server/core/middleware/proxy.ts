import { Request, Response } from "../../../deps.ts";

export default async ({ request, response } : { request: Request, response: Response  }, next : () => any) => {
    
    const { method, headers, serverRequest } = request;
    console.log(method, headers);

    await next();
};

{
    host: don.local:8000,
    connection: keep-alive,
    cache-control: no-cache,
    user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36,
    postman-token: e63d7731-40ca-54ed-134f-b1788efa582b,
    accept: */*,
    accept-encoding: gzip, deflate,
    accept-language: en-US, en;
    q=0.9
},

{
    host: don.local:8000,
    connection: keep-alive,
    user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36,
    accept: image/webp,image/apng,image/*,
    */*;q=0.8,
    referer: http://don.local:8000/users/1,
    accept-encoding: gzip,
    deflate,
    accept-language: en-US, en;q=0.9
}