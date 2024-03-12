/**
 * 
 */




$(document).ready(function() {
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
							<th>아이디</th>
							<th>권한</th>
						
						</tr>
					</thead>
				
					<tbody id = "memberDetail">
			
					
					</tbody>
				</table>
				</center>`
			$('#memberTable').html(memberTable)
			let trtd = ''
			for (let i in res) {


				trtd += `<tr >
							<td><a href = "#">${res[i]['userId']}</a></td>
							<td>${res[i]['role']}</td>
					
						</tr>`
			}

			$('#memberDetail').html(trtd)
		}
	})

})