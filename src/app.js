
// JavaScript Document

angular.module("lottery",[])  
.controller('ctrl_lottery',['$scope','$timeout',function($scope,$timeout){  
  
    //1.��ʼ����Ʒ����  
    $scope.items = [  
        {id:1,name:"ŷ�޺�����",status:0},  
        {id:2,name:"Mac̨ʽ����",status:0},  
        {id:3,name:"IPhone6�ֻ�",status:0},  
        {id:4,name:"ʱ��ɽ�س�",status:0},  
        {id:5,name:"�������ֵ���",status:0},  
        {id:6,name:"100Ԫ����",status:0}  
    ];  
  
    $scope.result = "��ƷΪ��";  
    $scope.$$ = function(id){  
        return document.getElementById(id);  
    }  
  
    $scope.showhide = function(pre,next){  
        pre = "step"+pre;  
        next = "step"+next;  
        $scope.$$(pre).style.display = "none";  
        $scope.$$(next).style.display = "block";  
    }  
  
    //��ʼ�齱  
    $scope.start = function(){  
        $scope.showhide(1,2);  //step1���� step2��ʾ  
        var circle = 5;  
        var selkey = Math.floor(Math.random()*$scope.items.length);  
        var next = function(key){  
            $scope.items[key].status = true; //�ý�Ʒ��ʾactive״̬ ng-class="{'active':item.status}"  
            if((key-1)>=0){  
                $scope.items[key-1].status = false;  //ǰһ����ƷremoveClass active  
            }  
            if(key==0){  
                $scope.items[$scope.items.length-1].status = false;  
            }  
            var timer = $timeout(function() {  
                if(circle <= 0 && selkey == key){  //���ָ��Ȧ��&&����н���ֵ��ĳ����Ʒ��������һ��    
                    $scope.showhide(2,3); //�л�����ʾ��Ʒҳ��  
                    $scope.result = $scope.items[key].name;  
                    return;  
                }  
                if($scope.items.length == key+1){  
                    circle--;   //һȦ����  
                }  
                if($scope.items[key+1]){  
                    next(key+1);       //ѭ������next() ��һ����Ʒactive  
                }else{  
                    next(0);      //һȦ��������ͷ��ʼ  
                }  
            }, 100);  
        }  
        next(0); //�״�ִ��next()  
    }  
    //��ʾ��Ʒʱ  
    $scope.reset = function(){  
        $scope.showhide(3,1); //���� step3 ��ʾstep1  
    }  
    $scope.edit = function(){  
        $scope.showhide(3,4);  
    }  
  
    //�޸Ľ�Ʒʱ  
    $scope.add =function(){  
        var last_id = lastid();  
        $scope.items.push({id:last_id,name:$scope.name,status:0});  
    }  
    $scope.del =function(id){  
        angular.forEach($scope.items,function(value,key){  
            if(id == value.id){  
                $scope.items.splice(key,1);  
            };  
        })  
    }  
  
    $scope.return = function(){  
        $scope.showhide(4,3);  
    }  
  
    //�ڲ���������ȡ���һ�����ݵ�id��  
    function lastid(){  
        var id = 0;  
        angular.forEach($scope.items,function(value,key){  
            if(id<value.id){  
                id = value.id;  
            }  
        })  
        return ++id; //���һ��Ԫ��id��1  
    }  
}])  