# -*- coding: utf-8 -*-
##############################################################################
#
#
#
#
#
##############################################################################





from imp import reload
import basic
reload(basic)
from  basic import public

CLIENT_NAME = public.CLIENT_NAME
DEBUG = public.DEBUG
if DEBUG=='1':
    import admin.vi.BASE_TPL
    reload(admin.vi.BASE_TPL)
from admin.vi.BASE_TPL             import cBASE_TPL

from flask import make_response

class cmenu(cBASE_TPL):
    
    def specialinit(self):
        self.viewid = 'menu'

    def goPartRefeshmenu(self):
        referer = self.objHandle.headers.get('referer')

        if not referer: 
            referer = 'admin?viewid=home'
        menu1,menu2,menu3 = self.dl.getSysMenu(self.dl.usr_id)

        if self.dl.usr_id in public.user_menu:
            public.user_menu[self.dl.usr_id] = {
                'menu1':menu1,'menu2':menu2,'menu3':menu3
            }
        else:
            public.user_menu.update( {self.dl.usr_id:{
                'menu1':menu1,'menu2':menu2,'menu3':menu3
            }} )

        s = self.redirect(referer)

        return s

    def goPartTopmenu(self):
        self.getBreadcrumb()  # 获取面包屑
        self.mnuid = self.dl.mnuid = self.dl.GP('mnuid')
        s = self.runApp('topmenu.html')
        return s

    def goPartMenu(self):
        self.mnuid = self.dl.mnuid = self.dl.GP('mnuid')
        s = self.runApp('menu.html')
        return s
    
    
    
        
 