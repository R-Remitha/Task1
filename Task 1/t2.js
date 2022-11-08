function cur()
            {
                var curPos =document.getElementById("rp").selectionStart;
                var x = document.getElementById('rp').value;
                console.log(curPos);
                if(x=='')
                {
                    document.getElementById("lp").value="No Pasted Text present."
                }
                else if(curPos<=42)
                {
                    document.getElementById("lp").value='You are on line no: 1';
                }
                else
                {
                    var v='';
                    for( var i = 0; i <curPos; i++ )
                    if( !(x[i] == '\n' || x[i] == '\r') )
                    {
                        v += x[i];
                    }
                    var res=v.match(/.{1,42}/g) || [];
                    document.getElementById("lp").value='You are on line no: '+res.length;
                    
                }
                
            }
            function get()
            {
                tim=setTimeout(get1,3);
            }

            function get1()
            {
            var x = document.getElementById('rp').value;
            var newstr = "";
            for( var i = 0; i < x.length; i++ )
            if( !(x[i] == '\n' || x[i] == '\r') )
            {
                newstr += x[i];
            }
            document.getElementById("rp").value="";
            var res=newstr.match(/.{1,42}/g) || [];
            console.log(res);
            for(var i=0;i<res.length;i++)
            {
                document.getElementById("rp").value +=res[i]+'\n';
            }

            let n=1;
            document.getElementById("bp").value='';
            while(n<=res.length)
            {
                document.getElementById("bp").value+=n+'\n';
                n++;
            }

        }