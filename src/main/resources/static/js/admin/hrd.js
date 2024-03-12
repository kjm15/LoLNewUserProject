/**
 * 
 */




$(document).ready(function() {
	makeBody()

})
function makeBody() {

	let str = ''
	$.ajax({

		type: 'post',
		url: '/admin/hrd/memberTable',
		success: function(res) {
			console.table(res)
			memberTable = `
			
				<center>
				<table border = 2>
					<thead >
						<tr>
							<th width = "120px" style="text-align:center">아이디</th>
							<th width = "150px"  style="text-align:center">현재 권한</th>
							<th width = "90px"  style="text-align:center">권한부여버튼</th>
						
						</tr>
					</thead>
				
					<tbody id = "memberDetail">
			
					
					</tbody>
				</table>
				</center>`
			$('#memberTable').html(memberTable)
			let trtd = ''
			for (let i in res) {
				let resRole = changeAuthority(res[i]['role'])

				trtd += `<tr >
							<td style="text-align:center"><a href = "#">${res[i]['userId']}</a></td>
							<td style="text-align:center">${resRole}</td>
							<td style="text-align:center"><a href = "#"><input type = "button" value = "권한부여시 클릭!" onclick = " authority(\'${res[i]['userId']}\',\'${resRole}\')"></a></td>
						</tr>`
			}

			$('#memberDetail').html(trtd)
		}
	})

}
function changeAuthority(authority) {
	let authorityName = ''
	if (authority == 'USER') {
		authorityName = "일반유저"
	} else if (authority == 'HRD-MNG') {
		authorityName = "인사매니저"
	} else if (authority == 'CMP-MNG') {
		authorityName = "챔피언매니저"
	} else if (authority == 'PAY-MNG') {
		authorityName = "결제매니저"
	} else if (authority == 'INQ-MNG') {
		authorityName = "고객서비스매니저"
	} else if (authority == 'ADMIN') {
		authorityName = "총관리자"
	}

	return authorityName
}


function authority(userId, role) {

	str1 = `<div>
				<table border = '2'>
					<thead >
						<tr>
							<th style="text-align:center">권한</th>
							<th style="text-align:center">아이디</th>
							<th style="text-align:center">현재</th>
							<th style="text-align:center">권한</th>
						<th style="text-align:center">변경하기</th>
						</tr>
					</thead>
				
					<tbody id = "authorityDetail">
						<tr>
							<td  width = "100px" style="text-align:center">권한설정</td>
							<td   "120px" style="text-align:center"> ${userId} </td>
							<td  width = "200px"style="text-align:center">${role}</td>
							<td>
												
								<select name="권한" id = "manageCheck">
								  <option value="USER">일반유저로</option>
								  <option value="HRD-MNG">인사매니저</option>
								  <option value="CMP-MNG">챔프메니저</option>
								  <option value="INQ-MNG">고객서비스매니저</option>
								  <option value="PAY-MNG">결제매니저</option>
								</select>
								
							</td>
							
							<td><input type = "button" value = "권한주기" onclick= " makeMng(\'${userId}\') "></td>
						</tr>
					</tbody>
				</table>
			</div>`

	$(".memberCL").html(str1)
	document.getElementById("roleCheck").value = role

}


function makeMng(userId) {


	roleCheck = document.getElementById("manageCheck").value //고른놈/영어
	let cRoleCheck = changeAuthority(roleCheck) //고른놈 // 한글

	let preRole = document.getElementById("roleCheck").value //기존놈

	if (preRole == cRoleCheck) {

		alert("같은 권한입니다.")
		return false;
	}

	
	data = { 'userId': userId, 'role': roleCheck }
	$.ajax({

		contentType: 'application/json',
		type: 'post',
		url: '/admin/changeAuthority',
		data: JSON.stringify(data),
		success: function(res) {
			console.log(res)
			if (res == true) {

				alert("업데이트 성공")
				$('#memberTable').html()
				$('#memberDetail').html()

				makeBody()
			}else{
				
					alert("업데이트 오류 관리자에게 문의")
			}

		}
	})
	//변경시작






}
