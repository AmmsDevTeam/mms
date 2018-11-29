package com.unittest;

import java.util.List;

import com.dao.ScheduleDao;
import com.entity.Schedule;

public class TestSchedule {
	public static void main(String[] args)
	{
		TestSchedule tester = new TestSchedule();
		tester.deleteSchedule();
	}
	
 	private void insertSchedule()
	{
 		ScheduleDao dao = new ScheduleDao();
 		Schedule schedule = new Schedule();
 		schedule.setCellPhoneNum("13012345678");
 		schedule.setFullName("����");
 		schedule.setTimeArrange("09:00-10:30"); 		
 		schedule.setActivationPlace("һ¥������1-108");
 		schedule.setActivationTitle("���ܴٽ���");
		
		dao.insertSchedule(schedule);
		
 		Schedule s = new Schedule();
 		s.setCellPhoneNum("13012345678");
 		s.setFullName("����");
 		s.setTimeArrange("10:45-11:30"); 		
 		s.setActivationPlace("���䡢���ơ����ݳ�");
 		s.setActivationTitle("��3��ι�");
		
		dao.insertSchedule(s);
	}
 	
    private void selectSchedule()
    {
    	ScheduleDao dao = new ScheduleDao();
    	String cellPhoneNum = "13012345678";
    	List<Schedule> scheduleList = dao.selectSchedule(cellPhoneNum);
    }
    
    private void deleteSchedule()
    {
    	ScheduleDao dao = new ScheduleDao();
    	String cellPhoneNum = "13012345678";
    	String result = dao.deleteSchedule(cellPhoneNum);
    }
}