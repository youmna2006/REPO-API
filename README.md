# REPO-API 
# How a Request Reaches Facebook


1. **User**
   The user types `facebook.com` in the browser and presses Enter.

2. **Browser (Client)**
   The browser is the client. It sends a request to open Facebook.

3. **DNS**
   DNS finds the IP address of `facebook.com` so the browser knows where to send the request.

4. **Internet / Network**
   The request travels through the internet and different network devices until it reaches Facebook.

5. **Firewall / Load Balancer**
   The firewall checks the request for security. The load balancer helps send the request to the correct Facebook server.

6. **Facebook Server**
   The server receives the request and processes it. If it needs information, it gets it from the database or storage.

7. **Response**
   The server creates a response and sends it back to the user.

8. **Internet / Network**
   The response travels back through the network to the user's device.

9. **Browser**
   The browser receives the response and uses it to display the website.

10. **Facebook Page**
    Finally, the Facebook page appears on the user's screen.
