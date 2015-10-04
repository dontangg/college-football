var app = $.sammy(function() {
  this.get('#/:conferenceName', function() {
    var conferenceName = this.params['conferenceName'];
    $('#conference-chooser').val(conferenceName);
    
    if(conferenceName === 'All') {
      $('#map-wrap .description').hide();
    
      for(var i = 0; i < teams.length; i++) {
        teams[i].dot.show();
      }
    
    } else {
      $('#map-wrap .description li').remove();
    
      $('#map-wrap .description').removeClass('left right').addClass(conferences[conferenceName].description);
    
      var listEl = $('#map-wrap .description ul');
      listEl.append("<li><h2 style='color:" + conferences[conferenceName].color + "'>" + conferenceName + "</h2></li>");
    
      var teamsToShow = [];
      for(var i = 0; i < teams.length; i++) {
        var team = teams[i];
        if (team.conference === conferenceName) {
          teamsToShow.push(team);
          team.dot.show();
        } else {
          team.dot.hide();
        }
      }
    
      teamsToShow.sort(function(a, b) {
        if((a.division + a.school) < (b.division + b.school))
          return -1;
        else if((a.division + a.school) > (b.division + b.school))
          return 1;
        return 0;
      });
    
      var curDivision = null;
      for(var i = 0; i < teamsToShow.length; i++) {
        var team = teamsToShow[i];
      
        if(curDivision !== team.division) {
          curDivision = team.division;
        
          listEl.append("<li><h3>" + curDivision + "</h3></li>");
        }
      
        (function(team) {
          $("<li class='school'>" + team.school + "</li>")
            .appendTo(listEl)
            .hover(function() {
              team.popup.show().toFront();
            }, function() {
              team.popup.hide();
            });
        })(team);
      }
    
      $('#map-wrap .description').show();
    }
  });
});
  
$(function() {
  
  var r = Raphael('map', 960, 620);
  
  r.image("usa.png", 11, 3, 938, 593);
  
  for(var i = 0; i < teams.length; i++) {
    var team = teams[i];
    
    (function(team) {
      var imgFilename = "logos/" + (team.school + " " + team.mascot).replace(/ A&M/, '').replace(/ /g, '-').replace(/[()']/g, '').toLowerCase() + ".gif";
      
      var labelSet = r.set();
      labelSet.push(r.image(imgFilename, 0, 0, 80, 80));
      
      var schoolName = r.text(90, 20, team.school + "\n" + team.mascot).attr({'font-family':'Lato', 'font-size':14});
      var schoolLocation = r.text(90, 50, team.location);
      var schoolConference = r.text(90, 70, team.conference);
      
      var biggestTextWidth = Math.max(schoolName.getBBox().width, schoolLocation.getBBox().width, schoolConference.getBBox().width);
      
      schoolName.translate(biggestTextWidth / 2, 0);
      schoolLocation.translate(biggestTextWidth / 2, 0);
      schoolConference.translate(biggestTextWidth / 2, 0);
      
      labelSet.push(schoolName);
      labelSet.push(schoolLocation);
      labelSet.push(schoolConference);
      labelSet.hide();
      
      var cityX = team.x, cityY = team.y;
      
      var popupPosition = team.popupPosition || 'right';
      var popupX = cityX;
      if(popupPosition === "right")
        popupX += 5;
      else
        popupX -= 5;
      var popupFrame = r.popup(popupX, cityY, labelSet, popupPosition).attr({'fill': '#fff', 'stroke': '#888', 'stroke-width': 2, 'fill-opacity': 0.8}).hide();
      
      var popupSet = r.set();
      popupSet.push(popupFrame);
      popupSet.push(labelSet);
      team.popup = popupSet;
      
      var fillColor = conferences[team.conference].fillColor;
      var strokeColor = conferences[team.conference].color;
      var dot = r.circle(cityX, cityY, 3).attr({'fill': (fillColor || '#fff'), 'fill-opacity': (fillColor ? 1 : 0), 'stroke': strokeColor, 'stroke-width': 1});
      var hoverDot = r.circle(cityX, cityY, 5).attr({'stroke': 'none', 'fill': '#fff', 'fill-opacity': 0, 'stoke-opacity': 0});
      hoverDot.hover(function() {
        dot.attr("r", 5);
        popupFrame.show().toFront();
        labelSet.show().toFront();
        /* When you hover over a dot, dim all dots that aren't in the same conferenece
        for(var j = 0; j < teams.length; j++) {
          if(teams[j].conference === team.conference)
            teams[j].dot.attr({'opacity': 1});
          else
            teams[j].dot.attr({'opacity': 0.3});
        } */
      }, function() {
        dot.attr("r", 3);
        popupFrame.hide();
        labelSet.hide();
        /* for(var j = 0; j < teams.length; j++) {
          teams[j].dot.attr({'opacity': 1});
        } */
      });
      
      var dotSet = r.set();
      dotSet.push(dot);
      dotSet.push(hoverDot);
      
      team.dot = dotSet;
    })(team);
    
  }

  $('#conference-chooser').change(function() {
    app.setLocation('#/' + $(this).val());
  });
  
  $('#search-box').bind('keyup search', function() {
    var searchTerm = $(this).val().toLowerCase();
    for(var j = 0; j < teams.length; j++) {
      if((teams[j].school + teams[j].mascot).toLowerCase().indexOf(searchTerm) > -1)
        teams[j].dot.attr({'opacity': 1});
      else
        teams[j].dot.attr({'opacity': 0.2});
    }
  });

  app.run('#/All');
});