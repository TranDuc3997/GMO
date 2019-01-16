package DTO;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DTO.checkValidate;
/**
 * Servlet implementation class login
 */
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public login() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String username = request.getParameter("user");
		String password = request.getParameter("pass");
		String Email = request.getParameter("email");
		String date = request.getParameter("birthday");
		String result = checkResult(username,password,Email,date);
		response.getWriter().append(result);
	}
	public String checkResult(String username,String password,String Email,String date) {
		if(!checkValidate.checkAcount(username))
			return "Username length min 8 letter";
		else if(checkValidate.checkPass(password))
			return "Password length min 8 letter";
		else if(checkValidate.checkEmail(Email))
			return  "Email format is incorrect";
		else if(!checkValidate.checkDate(date))
			return "The date must be greater than the current date";
		else 
			return "Login Succes";
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
