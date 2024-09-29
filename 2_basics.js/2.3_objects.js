//singleton
// const tinderUser=new object() ->singleton
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloggedIn=false
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            f_name: "nikita",
            l_name: " sharma"
        }
        
    }
}
console.log(regularUser.fullname.userfullname.f_name);
const obj1= {1: "a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)
// const returnedTarget=Object.assign(target,source)
const obj3={...obj1,...obj2}
console.log(obj3)
const users=[
{
    id:1,
    name:"nikita"
},{
    id:2,
    name :"hitesh"
},
{
    id:3,
    name :"priti "
}
]
users[1].name
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.keys(tinderUser.hasOwnProperty('isLoggedIN')));  // TO CHECK if it has the property or not
