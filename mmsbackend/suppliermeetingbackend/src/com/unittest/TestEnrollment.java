package com.unittest;

import java.util.List;

import com.dao.EnrollmentDao;
import com.entity.Enrollment;

public class TestEnrollment
{
	public static void main(String[] args)
	{
		TestEnrollment tester = new TestEnrollment();
		tester.selectAllEnrollment();
	}
	
 	private void updateEnrollment()
	{
 		EnrollmentDao dao = new EnrollmentDao();	
		Enrollment enrollment = new Enrollment();
		enrollment.setCellPhoneNum("13012345678");
		enrollment.setFullName("����");
		enrollment.setTitle("�ܾ���");
		enrollment.setGender("��");
		enrollment.setSupplierCode("100200");
		enrollment.setSupplierName("�����̳�");
		enrollment.setEstimateArriveTime("12��09��15��");
		enrollment.setIsVisited("��");
		enrollment.setIsSelfDrive("��");
		enrollment.setShuttleDestination("�����೵");
		enrollment.setMeetingSeatNum("1��10��2��");
		enrollment.setDinnerSeatNum("5����");
		enrollment.setComment("��ǩ��");
		
		dao.updateEnrollment(enrollment);
	}
	
	private void selectAllEnrollment()
	{
		EnrollmentDao ed = new EnrollmentDao();
		List<Enrollment> rtList = ed.selectAllEnrollment();
	}

 	private void insertEnrollment()
	{
 		EnrollmentDao dao = new EnrollmentDao();	
		Enrollment enrollment = new Enrollment();
		enrollment.setCellPhoneNum("13012345678");
		enrollment.setFullName("����");
		enrollment.setTitle("�ܾ���");
		enrollment.setGender("��");
		enrollment.setSupplierCode("100200");
		enrollment.setSupplierName("�����̳�");
		enrollment.setEstimateArriveTime("12��09��15��");
		enrollment.setIsVisited("��");
		enrollment.setIsSelfDrive("��");
		enrollment.setShuttleDestination("�����೵");
		enrollment.setMeetingSeatNum("");
		enrollment.setDinnerSeatNum("");
		enrollment.setComment("");
		
		dao.insertEnrollment(enrollment);
	}
 	
 	private void selectOneEnrollment()
 	{
		EnrollmentDao ed = new EnrollmentDao();
		String cellPhoneNum = "13012345678";
		Enrollment enroll = ed.selectOneEnrollment(cellPhoneNum);
 	}
 	
 	private void selectDinnerPartner()
 	{	
		EnrollmentDao ed = new EnrollmentDao();
		List<Enrollment> rtList = ed.selectDinnerPartner("05");
 	}
 	
 	private void checkIn()
	{
 		EnrollmentDao dao = new EnrollmentDao();	
		Enrollment enrollment = new Enrollment();
		enrollment.setCellPhoneNum("13012345678");
		enrollment.setComment("��ǩ��");
		
		dao.checkIn(enrollment);
	}
}
