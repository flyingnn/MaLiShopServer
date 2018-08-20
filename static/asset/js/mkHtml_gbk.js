/*����һ��tr�ַ���*/
function mk_tr(){
	/*�����������βΣ�Ϊ�˷��㴦��Ĭ��ֵ���ԾͲ�д������С������*/
	var td_str = arguments[0] ? arguments[0] : '';     /* ��һ��������tr ��innerHtml */
	var sty_str = arguments[1] ? arguments[1] : '';    /* �ڶ���������tr ��style�ַ��� */
	var class_str = arguments[2] ? arguments[2] : '';  /* ������������tr ��class�ַ��� */
	return '<tr style="'+sty_str+'" class="'+class_str+'">'+td_str+'</tr>'
}

/*����һ��td�ַ���*/
function mk_td(){
	/*�����������βΣ�Ϊ�˷��㴦��Ĭ��ֵ���ԾͲ�д������С������*/
	var con_str = arguments[0] ? arguments[0] : '';    /* ��һ��������td ��innerHtml */
	var sty_str = arguments[1] ? arguments[1] : '';    /* �ڶ���������td ��style�ַ��� */
	var class_str = arguments[2] ? arguments[2] : '';  /* ������������td ��class�ַ��� */
	return '<td style="'+sty_str+'" class="'+class_str+'">'+con_str+'</td>'
}

/*����һ��th�ַ���*/
function mk_th(){
	/*�����������βΣ�Ϊ�˷��㴦��Ĭ��ֵ���ԾͲ�д������С������*/
	var con_str = arguments[0] ? arguments[0] : '';    /* ��һ��������td ��innerHtml */
	var sty_str = arguments[1] ? arguments[1] : '';    /* �ڶ���������td ��style�ַ��� */
	var class_str = arguments[2] ? arguments[2] : '';  /* ������������td ��class�ַ��� */
	return '<th style="'+sty_str+'" class="'+class_str+'">'+con_str+'</th>'
}

/*����һ��label�ַ���*/
function mk_label(){
	/*����������βΣ�Ϊ�˷��㴦��Ĭ��ֵ���ԾͲ�д������С������*/
	var con_str = arguments[0] ? arguments[0] : '';    /* ��һ��������label ��innerHtml */
	var sty_str = arguments[1] ? arguments[1] : '';    /* �ڶ���������label ��style�ַ��� */
	var class_str = arguments[2] ? arguments[2] : '';  /* ������������label ��class�ַ��� */
	var name_str = arguments[3] ? arguments[3] : '';  /* ���ĸ�������label ��name�ַ��� */
	var id_str = arguments[4] ? arguments[4] : '';  /* �����������label ��id�ַ��� */
	return '<label style="'+sty_str+'" class="'+class_str+'" name="'+name_str+'" id="'+id_str+'">'+con_str+'</label>'
}

/*����һ��div�ַ���*/
function mk_div(){
	/*�����������βΣ�Ϊ�˷��㴦��Ĭ��ֵ���ԾͲ�д������С������*/
	var td_str = arguments[0] ? arguments[0] : '';     /* ��һ��������tr ��innerHtml */
	var sty_str = arguments[1] ? arguments[1] : '';    /* �ڶ���������tr ��style�ַ��� */
	var class_str = arguments[2] ? arguments[2] : '';  /* ������������tr ��class�ַ��� */
	return '<div style="'+sty_str+'" class="'+class_str+'">'+td_str+'</div>'
}

/** 
 * ���ܣ���js ����һ�� ģ̬��
 * title �Ǳ��Ĵ����
 * list_title �� �б���ʽ�ı�����
 * data_list �Ƕ�ά����ʽ������
 */
function showMyModal_list(title,list_title,data_list){
	var sModal = $('<div id="showMyModal_list" name="showMyModal_list" class="modal hide fade" style="margin-left:-400px;width:800px;"></div>');
	var modal_header = $('<div class="modal-header"></div>');
	var modal_body = $('<div class="modal-body"></div>');
	var modal_footer = $('<div class="modal-footer"></div>');
	
	var modal_title = $('<h3 id="myModalLabel">'+title+'</h3>');
	var modal_title_close_btn = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">��</button>');
	
	var modal_footer_close_btn = $('<button class="btn" data-dismiss="modal" aria-hidden="true">�ر�</button>');
	
	/*��װmodal��ui*/
	modal_header.append(modal_title_close_btn);
	modal_header.append(modal_title);
	
	/*����һ��table*/
	var table=$('<table class="table table-striped"></table>');
	var tHead= $('<thead></thead>');
	var tbody= $('<tbody></tbody>');
	var i = 0;
	var j = 0;
	
	//������
	var thr = $(mk_tr());
	thr.append( $(mk_th('�鿴')) );
	for(i=0;i<list_title.length;i++){
		var thd = $(mk_th(list_title[i]));
		thr.append(thd);
	}
	tHead.append(thr);
	table.append(tHead);
	
	//������
	for(i=0;i<data_list.length;i++){
		var tr = $(mk_tr());
		tr.append( $(mk_td( '<a class="btn btn-mini" onclick=\'showDetails('+data_list[i][0]+');\' title="�鿴"><i class="icon-search"></i></a>' )) );
		for(j=0;j<data_list[i].length;j++){
			var td = $(mk_td(data_list[i][j]));
			tr.append(td);
		}
		tbody.append(tr);
	}
	table.append(tbody);
	
	/*table����ģ̬������*/
	modal_body.append(table);
	/*ģ̬���ײ����밴ť*/
	modal_footer.append(modal_footer_close_btn);
	
	/*���ģ̬��*/
	sModal.append(modal_header);
	sModal.append(modal_body);
	sModal.append(modal_footer);
	
	sModal.modal();
	
}

/*��ȡ�����*/
function getRandomNum(){
		return parseInt( Math.random()*1000000000000000 );
}

/*���°�ť�Ĵ���*/
function clickListBtn(obj,sUrl){
		/*��������*/
		$.ajax({
				type: "GET",
				cache:false, /*IE9 ����ģʽ�᲻ˢ������*/
				async:false, /*ȡ���첽*/
				url: sUrl,
				dataType:'json',
				success:function(data){ /*������ݾ�ִ�д���*/
						
						if( $($(obj).find('i')[0]).attr("class") == "icon-minus" ){ /*����Ǽ��ţ��Ǿ�ɾ��֮ǰ�������*/
								delRow(obj);
						}else{
								showRow(obj,data);
						}
				},
				error:function(XMLHttpRequest,errorMsg){
						alert('�첽�����쳣����ϵ����Ա');
				}
		});
}

/*�����еĴ���*/
function showRow(obj,dataList){
		
		var this_tr = getParentObj(obj,'tr');        /*�ð�ť���ڵ�tr����*/
		var this_table = getParentObj(obj,'table');  /*�ð�ť���ڵ�table����*/
		var cols = this_tr.find('td').length;        /*table������*/
		var dataCols = dataList[0].length;	         /*��������*/
		var needCols = cols-dataCols+1;              /*��Ҫ�ϲ�������*/
		var ranCode = getRandomNum();                /*�����*/
		
		var trs = []; /*�յ��б�����������ƴ�Ӻ��tr��*/
		
		var i = 0,j=0;
		for( i=0;i<dataList.length;i++ ){
				var tr = $('<tr></tr>').attr("random",ranCode);
				for(j=0;j<dataList[0].length;j++){
						/*��һ���� th ��Ȼ�����һ����Ҫ�ϲ����������*/
						var td = ( j==0 ? $('<th></th>') : ( j== dataList[0].length-1? $('<td></td>').attr("colspan",needCols):$('<td></td>') ) );
						tr.append( td.html( dataList[i][j] ) );
				}
				trs.push(tr);
		}
		/*�����Ž�trs�󣬾Ϳ�ʼ���뵽table��*/
		for(i=dataList.length-1;i>=0;i--){
				trs[i].insertAfter( this_tr ); /*������*/
				
		}
		/*ִ����Ͼ���button�Ϸ�ranCode��Ϊ���*/
		$(obj).attr("random",ranCode);
		$($(obj).find('i')[0]).attr("class","icon-minus"); /*�������ˣ��ͻ��ɼ��ŵ�class*/
}

/*ɾ���еĴ���*/
function delRow(obj){
		var this_tr = getParentObj(obj,'tr');        /*�ð�ť���ڵ�tr����*/
		var this_table = getParentObj(obj,'table');  /*�ð�ť���ڵ�table����*/
		var ranCode = $(obj).attr("random");
		var trs = this_table.find("tr[random="+ranCode+"]");
		var i = 0;
		for(i=0;i<trs.length;i++){
				$(trs[i]).remove();
		}
		$($(obj).find('i')[0]).attr("class","icon-plus"); /*�������ˣ��ͻ��ɼӺŵ�class*/
		$(obj).removeAttr("random"); /*�Ƴ�random����*/
}

/*ͨ��obj�����ȡָ���ĸ�jq�������10��֮�ڻ�ȡ�������Ǿ���ͣ��*/
function getParentObj(obj,pTagName){
		var i = 0;
		var parent = null;
		var p = $(obj);
		for(i=0;i<10;i++){
			  p = p.parent();
				if( p[0].tagName==pTagName.toLocaleUpperCase() ){
						parent = p;
						break;
				}
		}
		return parent;
}

/*�������չ�ӿڣ�������չ����ģ̬����Ĵ���*/
function doAfterHid_modal_alert(){
	
}

/**
 * ���ܣ�������ʾ��Ϣ����
 * ����: ����1 �� ��Ϣ������
 *       ����2 �� �ص�����������ִ�����غ�Ĵ���Ĭ���� ����Ҳ����
 */
function modal_alert(){
	
	var content = arguments[0] ? arguments[0] : '����һ����Ϣ';     /* ��һ��������tr ��innerHtml */
	var title = '��ܰ��ʾ';    /* �ڶ���������tr ��style�ַ��� */
	var callback_hid = arguments[1] ? arguments[1] : doAfterHid_modal_alert;
	
	var sModal = $('<div id="globalAlert" class="modal hide fade" style="width:400px;"></div>');
	var modal_header = $('<div class="modal-header"></div>');
	var modal_body = $('<div class="modal-body"></div>');
	var modal_footer = $('<div class="modal-footer"></div>');
	
	var modal_title = $('<h3>'+title+'</h3>');
	var modal_title_close_btn = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">��</button>');
	var modal_footer_close_btn = $('<button class="btn" data-dismiss="modal" aria-hidden="true">�ر�</button>');
	
	/*��װmodal��ui*/
	modal_header.append(modal_title_close_btn);
	modal_header.append(modal_title);
	
	/*content����ģ̬������*/
	modal_body.append(content);
	
	/*ģ̬���ײ����밴ť*/
	modal_footer.append(modal_footer_close_btn);
	
	/*���ģ̬��*/
	sModal.append(modal_header);
	sModal.append(modal_body);
	sModal.append(modal_footer);
	
	$(document.body).append(sModal); /*���뵽html�ĵ��У������ض���������*/
	
	$("div[id='globalAlert']").on('hidden', function () {
		/*���ղŵ�����html����������������*/
		$("#globalAlert").remove();
		
		callback_hid(); /*ִ����չ*/
	});
	
	$("#globalAlert").modal('show');
	
}

/*ȷ�ϵĲ���*/
function doAfterYes_modal_alert(){
	
}

/*ȡ���Ĳ���*/
function doAfterNo_modal_alert(){
	
}

/**
 * ���ܣ����� ģ��confirm ������Ч��
 * ����: ����1 �� ��Ϣ������
 *       ����2 �� �ص����������ڰ���ȷ��֮��Ĵ���
 *       ����3 �� �ص����������ڰ���ȡ��֮��Ĵ���Ĭ���� ����Ҳ����
 *       ����4 �� �ص�����������ִ�����غ�Ĵ���Ĭ���� ����Ҳ����
 */
function modal_confirm(){
	
	var content = arguments[0] ? arguments[0] : '����һ��ȷ����Ϣ';     /* ��һ��������tr ��innerHtml */
	var title = '��ܰ��ʾ';    /* �ڶ���������tr ��style�ַ��� */
	
	var callback_Yes = arguments[1] ? arguments[1] : doAfterYes_modal_alert;
	var callback_No = arguments[2] ? arguments[2] : doAfterNo_modal_alert;
	
	var callback_hid = arguments[3] ? arguments[3] : doAfterHid_modal_alert;
	
	var sModal = $('<div id="globalAlert" class="modal hide fade" style="width:400px;"></div>');
	var modal_header = $('<div class="modal-header"></div>');
	var modal_body = $('<div class="modal-body"></div>');
	var modal_footer = $('<div class="modal-footer"></div>');
	
	var modal_title = $('<h3>'+title+'</h3>');
	var modal_title_close_btn = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">��</button>');
	var modal_footer_Yes_btn = $('<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">ȷ��</button>');
	var modal_footer_No_btn = $('<button class="btn" data-dismiss="modal" aria-hidden="true">ȡ��</button>');
	
	/*��ȷ�Ϻ�ȡ����ť����¼�����*/
	modal_footer_Yes_btn.bind('click',callback_Yes);
	modal_footer_No_btn.bind('click',callback_No);
	
	/*��װmodal��ui*/
	modal_header.append(modal_title_close_btn);
	modal_header.append(modal_title);
	
	/*content����ģ̬������*/
	modal_body.append(content);
	
	/*ģ̬���ײ����밴ť*/
	modal_footer.append(modal_footer_Yes_btn);
	modal_footer.append(modal_footer_No_btn);
	
	/*���ģ̬��*/
	sModal.append(modal_header);
	sModal.append(modal_body);
	sModal.append(modal_footer);
	
	$(document.body).append(sModal); /*���뵽html�ĵ��У������ض���������*/
	
	$("div[id='globalAlert']").on('hidden', function () {
		/*���ղŵ�����html����������������*/
		$("#globalAlert").remove();
		
		callback_hid(); /*ִ����չ*/
	});
	
	$("#globalAlert").modal({
		backdrop:'static',
		keyboard:false,
		show:true
	});
	
}