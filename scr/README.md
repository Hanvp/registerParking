USER
/ : 차량 등록(get, post)
/:id/check : 확인(get) ※필요 없어짐
/:id/delete : 삭제(get)
/:id/edit : 변경(get,post) ※필요 없어짐

MANAGER
/manager : 등록된 차량 확인(get)
/manager/:id/delete : 등록한 차량 삭제(get)
/manager/check : 내역 확인(get)

CAR MODEL
-car number
-use hour
-registered time