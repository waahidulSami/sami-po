import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  Clock, 
  User, 
  MessageSquare, 
  CheckCircle,
  Trash2,
  RefreshCw
} from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;

      setMessages(prev => 
        prev.map(msg => 
          msg.id === id ? { ...msg, read: true } : msg
        )
      );

      toast({
        title: "Success",
        description: "Message marked as read",
      });
    } catch (error) {
      console.error('Error updating message:', error);
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setMessages(prev => prev.filter(msg => msg.id !== id));

      toast({
        title: "Success",
        description: "Message deleted",
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Client Messages</h1>
              <p className="text-muted-foreground mt-2">
                Manage contact form submissions from your portfolio
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                {unreadCount} unread
              </Badge>
              <Button 
                onClick={fetchMessages}
                variant="outline"
                size="sm"
              >
                <RefreshCw size={16} className="mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Messages</p>
                    <p className="text-2xl font-bold text-foreground">{messages.length}</p>
                  </div>
                  <MessageSquare className="text-primary" size={24} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Unread</p>
                    <p className="text-2xl font-bold text-foreground">{unreadCount}</p>
                  </div>
                  <Mail className="text-orange-400" size={24} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Read</p>
                    <p className="text-2xl font-bold text-foreground">{messages.length - unreadCount}</p>
                  </div>
                  <CheckCircle className="text-green-400" size={24} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messages List */}
          <div className="space-y-4">
            {messages.length === 0 ? (
              <Card className="bg-card-gradient border-border/50">
                <CardContent className="p-12 text-center">
                  <MessageSquare size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Messages Yet</h3>
                  <p className="text-muted-foreground">
                    When clients submit the contact form, their messages will appear here.
                  </p>
                </CardContent>
              </Card>
            ) : (
              messages.map((message) => (
                <Card 
                  key={message.id} 
                  className={`bg-card-gradient border-border/50 transition-all duration-300 ${
                    !message.read ? 'border-primary/30 shadow-card' : 'hover:border-primary/20'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <User size={20} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{message.name}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Mail size={14} />
                              {message.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {formatDate(message.created_at)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {!message.read && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary">
                            New
                          </Badge>
                        )}
                        <div className="flex gap-1">
                          {!message.read && (
                            <Button
                              onClick={() => markAsRead(message.id)}
                              variant="outline"
                              size="sm"
                            >
                              <CheckCircle size={14} className="mr-1" />
                              Mark Read
                            </Button>
                          )}
                          <Button
                            onClick={() => deleteMessage(message.id)}
                            variant="outline"
                            size="sm"
                            className="hover:border-red-500/50 hover:text-red-400"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="text-foreground whitespace-pre-wrap">{message.message}</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        onClick={() => window.open(`mailto:${message.email}?subject=Re: Your inquiry`)}
                        variant="glass"
                        size="sm"
                      >
                        <Mail size={14} className="mr-1" />
                        Reply via Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;