package DTO;

import java.util.Calendar;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class checkValidate {
	public static boolean checkAcount(String acount) {
		if(acount.trim().length() < 9)
			return false;
		return true;
		
	}
	public static boolean checkPass(String password) {
		if(password.length() < 9)
			return false;
		return true;
	}
	public static boolean checkEmail (String Email) {
		  Matcher matcher = VALID_EMAIL_ADDRESS_REGEX .matcher(Email);
		  return matcher.find();
	}
	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = 
		    Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
	public static boolean checkDate(String date) {
		String[] dates = date.split("/");
		Calendar cal = Calendar.getInstance();
		Calendar day =  Calendar.getInstance();
		day.set(Integer.parseInt(dates[0]), Integer.parseInt(dates[1]),Integer.parseInt(dates[2]));
		if(cal.compareTo(day) > 0) 
			return false;
		return true;
		
	}

}
