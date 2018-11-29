$(document).ready(function()
{
	$('#select_enrollment_btn').click(function()
	{
		get_attendee_info();
	});
	
	$('#checkin_btn').click(function()
	{
		get_checkin();
	});
});

function get_attendee_info()
{
	var cellPhoneNum = $('#cell_phone_num_txt').val();
	$.ajax(
	{
		async : false,
		cache: false,
		url: one_enrollment_url + "/" + cellPhoneNum,
		type: 'GET',
		success : function(data, status, xhr)
		{
			var info = $(data).find("enrollment");
			if(info.length > 0)
			{
				show_attendee_info(info);
			}
			else
			{
				get_attendee_info_2018(cellPhoneNum);
			}
		},
		error : function(xhr, status, error)
		{
			alert("Fail - " + xhr.statusText + " - " + xhr.status + " - " + error);
		}
	});
}

function show_attendee_info(info)
{
	$('#cell_phone_num_label').text(info.children("cellPhoneNum").text());
	$('#full_name_label').text(info.children("fullName").text());
	$('#supplier_name_label').text(info.children("supplierName").text());
	$('#checkin_status_label').text(info.children("comment").text());
}

function get_attendee_info_2018(cellPhone)
{
	$.ajax(
	{
		async : false,
		cache: false,
		url: one_enrollment_url_2018 + "/" + cellPhone,
		type: 'GET',
		success : function(data, status, xhr)
		{
			var info = $(data).find("enrollment");
			if(info.length > 0)
			{
				show_attendee_info_2018(info);
			}
			else
			{
				alert("您还没有报名,请先报名.");				
			}
		},
		error : function(xhr, status, error)
		{
			alert("Fail - " + xhr.statusText + " - " + xhr.status + " - " + error);
		}
	});
}

function show_attendee_info_2018(info)
{
	$('#cell_phone_num_label').text(info.children("cellPhoneNum").text());
	$('#full_name_label').text(info.children("fullName").text());
	$('#supplier_name_label').text(info.children("supplierName").text());
	$('#checkin_status_label').text(info.children("comment").text());
}

function get_checkin()
{
	var cellPhoneNum = $('#cell_phone_num_txt').val();
	$.ajax(
	{
		async : false,
		cache: false,
		url: one_enrollment_url + "/" + cellPhoneNum,
		type: 'GET',
		success : function(data, status, xhr)
		{
			var info = $(data).find("enrollment");
			if(info.length > 0)
			{
				checkin(cellPhoneNum);
			}
			else
			{
				get_checkin_2018(cellPhoneNum);
			}
		},
		error : function(xhr, status, error)
		{
			alert("Fail - " + xhr.statusText + " - " + xhr.status + " - " + error);
		}
	});
}

function checkin(cellPhone)
{
	var content = "{'cellPhoneNum':'"+cellPhone+"','fullName':'','title':'','gender':'','supplierCode':'','supplierName':'','estimateArriveTime':'','isVisited':'','isSelfDrive':'','shuttleDestination':'','meetingSeatNum':'','dinnerSeatNum':'','comment':'已签到'}";
	$.ajax(
	{
		url: checkin_url,
		type: "POST",
		data: "content="+content,
		success: function(data)
		{
			if (data.length > 0)
			{
				if("SUCCESS" == data)
				{
					alert("签到成功。");
				}
				else
				{
					alert("签到失败。");
				}
			}
		}
	});
}

function get_checkin_2018(cellPhone)
{
	$.ajax(
	{
		async : false,
		cache: false,
		url: one_enrollment_url_2018 + "/" + cellPhone,
		type: 'GET',
		success : function(data, status, xhr)
		{
			var info = $(data).find("enrollment");
			if(info.length > 0)
			{
				checkin_2018(cellPhone);
			}
			else
			{
				alert("您还没有报名,请先报名.");				
			}
		},
		error : function(xhr, status, error)
		{
			alert("Fail - " + xhr.statusText + " - " + xhr.status + " - " + error);
		}
	});
}

function checkin_2018(cellPhoneParam)
{
	var content = "{'cellPhoneNum':'"+cellPhoneParam+"','fullName':'','title':'','gender':'','supplierCode':'','supplierName':'','estimateArriveTime':'','isVisited':'','isSelfDrive':'','shuttleDestination':'','meetingSeatNum':'','dinnerSeatNum':'','comment':'已签到'}";
	$.ajax(
	{
		url: checkin_url_2018,
		type: "POST",
		data: "content="+content,
		success: function(data)
		{
			if (data.length > 0)
			{
				if("SUCCESS" == data)
				{
					alert("签到成功。");
				}
				else
				{
					alert("签到失败。");
				}
			}
		}
	});
}