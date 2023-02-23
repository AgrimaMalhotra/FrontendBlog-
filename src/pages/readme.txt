npm i react-router-dom  -> check for latest version

home path / -> first thing when load localhost:3000

error-> path {*} -> redirect -> if try anything and page not there like /abc go to this

2 not founds:
1. wrong page request -404 -> pageNotFound -> user error
2. frontend accesses backend thing not found 
-> application not found -> separate error page /error
order of routes doesn't matter

add try catch to makeRequest -> redirection 
-> useNavigate hook -> 
only do when react in scope -> imported 
-> cant call in util pass as prop

navigate?
backend -> throw boom.bad 

Not showing error directly:
- user friendly
- share info to be used by potential attacker

 add path param for error code 
 query param: ?name=

 why use path param? 
 path param part of source trying to access 
 -> error code identifier for that error

 useParams() ->
if not get error code from backend -> might not get error code
-> so conditional errorCode

/error -> something went wrong
/error/1 -> error code too -> so make errorcode param with ? > show error code also
earlier route def for /error/:errorcode
with ? route for both

now in navigate to redirect -> want to add errorcode route

? after response -> because error might be from code before axios
? not required in js *****

can do error.response.data.statusCode 
status-> request status
data-> response body
send or get in axios -> put data in {data:}

3 api : get clap like
only if navigate then only redirect 
else page might be handling error its own way

stop server to see case when error code from backend -> err_connection_refuse-> axios connect failed to talk to backend
------------
ADD constants for routes
------------

TESTING NAVIGATION:
makeRequest Navigation:
1. get error status
2. not getting error status
3. if navigate is not there -> nothing happens (write on own)

mockRejectedValueOnce  -> mock ony for first call of axios
if multiple axios calls -> mock ony 1st mockRejectedValueOnce
simply mock navigate 

assert on number of times axios called -> not have been called
mock navigate component too

PROFILER -> how many times rendered
if parent updating but child not -> no rendering in PROFILER
change state variable wihtout using chagestate hook
-> objects using by reference value -> array of values
posts-> state
newposts= posts;
newposts.claps = posts.claps+1;
setClap(newposts);

->sol:
newposts = {
    ...newposts ,
    claps: posts.claps +1
}
setClap(newposts)
ACCIDENTAL MUTATION 