import makeRequest from '..';
import { GET_BLOG_DATA, BACKEND_URL } from '../../../constants/apiEndPoints';
import mockBlogPostData from '../../../mocks/blogPosts';
/*
no try catch -> test for happy case
1. without request body
2. with request body
async await because fn itself async
to check if fn called or not-> spyOn(module, fn in module);
object,method trying to spyon -> what spyon if not accessing method inside axios
here just doing axios and not axios.get /

1. axios call after messaging input
2.data destructuring and data being returned

check if axios called 
toHaveBeenCalledTimes -> use bcz api may be called 2x if useEffect not placed properly

also check if argument proper -> toHaveBeenCalledWith
1st see if called -> what actually called with
BACKEND_URL -> CONSTANT
others-> be as specific as possible -> if use spread operator-> will have to check if correct or not then

before makeRequest -> make sure not called .not.toBeCalled()
-----
lastly check response body -> 2nd part of statement -> 2nd test
-> again have data in response
npm run test  -> to see description add --verbose
data twice because data key returned by backend as well -> 
axios returns data:{whatever passed in axios request body}
*/

jest.mock('axios');
describe('makeRequest', () => {
  const mockedAxios = 'axios';
  it('should make api call with appropiate request options and return response body when only api end point is specified', async () => {
    mockedAxios.mockResolvedValueOnce({
      data: mockBlogPostData,
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(GET_BLOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_BLOG_DATA.url,
      method: 'get',
    });
    expect(response).toEqual(mockBlogPostData);
  });
});
